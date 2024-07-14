import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CameraScreen from './screens/Camera';
import Constants from 'expo-constants';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider style={{ backgroundColor: '#102026', paddingTop: Constants.statusBarHeight }}>
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
          <Tab.Screen 
            name="IA assistant" 
            component={IAAssistantScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ opacity: focused ? 1 : 0.5 }}>
                  <Text style={{ color: focused ? '#BF9B6F' : '#8195A6' }}>IA assistant</Text>
                </View>
              )
            }} 
          />
          <Tab.Screen 
            name="Camera" 
            component={CameraScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ opacity: focused ? 1 : 0.5 }}>
                  <Text style={{ color: focused ? '#BF9B6F' : '#8195A6' }}>Camera</Text>
                </View>
              )
            }} 
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const IAAssistantScreen = () => (
  <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
