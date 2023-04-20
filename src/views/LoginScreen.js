import React, {useEffect, useState} from 'react'
import {Image, View} from 'react-native'
import {Button, Snackbar, TextInput} from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const setInput = setter => val => {
    setter(val)
  }
  
  const login = async() => {
    try {
      setInput(setErrorMessage)('')
      if (username === 'dans' && password === 'pro') {
        await AsyncStorage.setItem('isLogin', 'true')
        navigation.replace('Home')
      } else {
        setInput(setErrorMessage)('Username atau Password Salah!')
      }
    } catch (error) {
      console.log('error login', error)
    }
  }

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../assets/image/logo/logo.png')}
          style={{
            width: 200,
            height: 200,
            resizeMode: 'contain',
          }}
        />
        <View style={{width: '80%'}}>
          <TextInput
            mode='outlined'
            label='Username'
            value={username}
            onChangeText={setInput(setUsername)}
            style={{marginBottom: 16}}
          />
          <TextInput
            mode='outlined'
            label='password'
            value={password}
            secureTextEntry
            onChangeText={setInput(setPassword)}
            style={{marginBottom: 16}}
          />
          <Button
            onPress={login}
            mode='contained'
            style={{
              borderRadius: 8,
            }}>
            Login
          </Button>
        </View>
      </View>
      <Snackbar
        visible={!!errorMessage}
        onDismiss={() => setInput(setErrorMessage)('')}
        action={{
          label: 'Tutup',
          onPress: () => {
            setInput(setErrorMessage)('')
          },
        }}>
        {errorMessage}
      </Snackbar>
    </View>
  )
}

export default LoginScreen
