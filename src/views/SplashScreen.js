import React, { useEffect } from 'react'
import { View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    firstLoad()
    return () => null
  }, [])

  const firstLoad = async() => {
    try {
      const isLogin = await AsyncStorage.getItem('isLogin')
      if(isLogin) {
        console.log('sudah login')
        navigation.replace('Home')
      } else {
        navigation.replace('Login')
        console.log('belum login')
      }
    } catch (error) {
      console.log('error firstLoad', error)
    }
  }
  return (
    <View />
  )
}

export default SplashScreen