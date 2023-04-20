import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreen from './src/views/LoginScreen'
import HomeScreen from './src/views/HomeScreen'
import DetailScreen from './src/views/DetailScreen'
import SplashScreen from './src/views/SplashScreen'

const Stack = createNativeStackNavigator()

const defaultOptions = {
  headerShown: false,
}

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen
          name='Splash'
          component={SplashScreen}
          options={defaultOptions}
        />
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={defaultOptions}
        />
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={defaultOptions}
        />
        <Stack.Screen
          name='Detail'
          component={DetailScreen}
          options={defaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
