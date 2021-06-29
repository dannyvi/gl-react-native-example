import * as React from 'react'
import { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ListScreen from '../screens/ListScreen'
import ModalScreen from '../screens/ModalScreen'
import LoginScreen from '../screens/LoginScreen'
import { isReadyRef, navigationRef } from './RootNavigation'
import HomeScreen from '../screens/HomeScreen'
import ExpoListScreen from '../screens/ExpoListScreen'
import MyScreen from '../screens/MyScreen'
import GlScreen from '../screens/GlScreens'
import ExpoScreen from '../screens/ExpoScreens'

const Stack = createStackNavigator()

function MainStackNavigator() {
  useEffect(() => {
    return () => {
      isReadyRef.current = false
    }
  }, [])
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true
      }}>
      <Stack.Navigator
        mode="modal"
        headerMode="none"
        screenOptions={{
          cardStyle: { backgroundColor: 'transparent' },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1],
              }),
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: 'clamp',
              }),
            },
          }),
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Three" component={ExpoListScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="My" component={MyScreen} />
        <Stack.Screen name="Gl" component={GlScreen} />
        <Stack.Screen name="Expo" component={ExpoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator
