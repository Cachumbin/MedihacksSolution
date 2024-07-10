import { Text, View, Button } from "react-native"
import Layout from '../layout.js'
import { CameraView, useCameraPermissions } from 'expo-camera';

const Camera = () => {
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }
    return (
        <Layout>
            {permission.granted ?
                <View >
                    <CameraView style={{width: '100%', height: '100%'}} facing={'back'}>
                    </CameraView>
                </View>
                :
                <View>
                    <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                    <Button onPress={requestPermission} title="grant permission" />
                </View>
            }
        </Layout>
    )
}
export default Camera
