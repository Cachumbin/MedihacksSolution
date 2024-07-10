import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Chat from './screens/Chat';
import Camera from './screens/Camera';
import constants from 'expo-constants';



export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaProvider style={{ padding: 10, backgroundColor: '#102026', paddingTop: constants.statusBarHeight }}>
      <View style={{ height: '100%', borderRadius: 40, overflow: 'hidden', borderTopEndRadius: 10, borderTopStartRadius: 10 }}>
        <NavigationContainer
        >
          <Tab.Navigator
            screenOptions={{ headerShown: false }}
          >
            <Tab.Screen name="IA assistant" component={Chat} />
            <Tab.Screen name="Camera" component={Camera} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
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
