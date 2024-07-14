import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';
import * as tmImage from '@teachablemachine/image';
import { Asset } from 'expo-asset';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [model, setModel] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');

      await tf.ready();

      // Load the model and metadata from local assets
      const modelAsset = Asset.fromModule(require('./my_model/model.json'));
      const metadataAsset = Asset.fromModule(require('./my_model/metadata.json'));
      await modelAsset.downloadAsync();
      await metadataAsset.downloadAsync();

      const modelURL = modelAsset.uri;
      const metadataURL = metadataAsset.uri;

      const tmModel = await tmImage.load(modelURL, metadataURL);
      setModel(tmModel);
    })();
  }, []);

  const handleImageTensorReady = async (images) => {
    const loop = async () => {
      if (model && cameraRef.current) {
        const imageTensor = images.next().value;
        if (imageTensor) {
          const predictions = await model.predict(imageTensor);
          setPredictions(predictions);
        }
      }
      requestAnimationFrame(loop);
    };
    loop();
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={Camera.Constants.Type.front}
        ref={cameraRef}
        onCameraReady={() => handleImageTensorReady()}
      />
      <View style={styles.predictionsContainer}>
        {predictions.length > 0 && (
          predictions.map((prediction, index) => (
            <Text key={index}>{`${prediction.className}: ${prediction.probability.toFixed(2)}`}</Text>
          ))
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Start" onPress={() => handleImageTensorReady()} />
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  camera: {
    width: '100%',
    height: '70%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  predictionsContainer: {
    position: 'absolute',
    top: 20,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 5,
  },
});
