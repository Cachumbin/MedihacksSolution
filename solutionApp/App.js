import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {  SafeAreaProvider } from 'react-native-safe-area-context';
import Layout from './layout';


export default function App() {

  return (
    <SafeAreaProvider>
      <Layout>
        <Text>
          Hola a todosa
        </Text>
      </Layout>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
