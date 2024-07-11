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
    <SafeAreaProvider style={{ backgroundColor: '#102026', paddingTop: constants.statusBarHeight }}>
      <StatusBar style="light" ></StatusBar>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
              marginBottom: 10,
              backgroundColor: '#102026',
              borderTopWidth: 0,
            }
          }}
        >
          <Tab.Screen options={{
            tabBarIcon: ({ focused }) => (
              <View style={{opacity: focused? 1: 0.5}}>
                <Text style={{color: focused? '#BF9B6F' : '#8195A6'}}>IA assistant</Text>
              </View>
            )
          }} name="IA assistant" component={Chat} />
          <Tab.Screen options={{
            tabBarIcon: ({ focused }) => (
              <View style={{opacity: focused? 1: 0.5}}>
                <Text style={{color: focused? '#BF9B6F' : '#8195A6'}}>Camera</Text>
              </View>
            )
          }} name="Camera" component={Camera} />
        </Tab.Navigator>
      </NavigationContainer>
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
