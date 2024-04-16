import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { FIREBASE_AUTH } from '../FirebaseConfig'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import tw from "tailwind-react-native-classnames"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const auth = FIREBASE_AUTH;

  const navigation = useNavigation()

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth,email, password);
      console.log(response)
      alert('Login Successful')
    } catch (error) {
      console.log(error);
      
    } finally {
      setLoading(false)
    }
  }

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }



  return (
    // <View style={tw`flex-1`}>
    //   <KeyboardAvoidingView behavior="padding">
    //   <TextInput value={email} style={styles.input} placeholder='Email'
    //   onChangeText={(text) => setEmail(text)} ></TextInput>
    //   <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder='Password'
    //        onChangeText={(text) => setPassword(text)}></TextInput>
    //     {loading ? (
    //       <ActivityIndicator size="large" color="#0000ff" />

    //       ) : (
    //         <>
    //           <Button title="Login" onPress={signIn} />
    //           <Button title="Create account" onPress={signUp} />
    //         </>
    //       )}
    //   </KeyboardAvoidingView>
     
    // </View>
    <View style={tw`flex-1`}>
      <ImageBackground 
      resizeMode='cover'
      style={tw`flex-1`}
      source={{ uri: "https://tinder.com/static/tinder.png"}}
      >
        <View style={[tw`absolute bottom-40  bg-white p-4 rounded-2xl`, {marginHorizontal: "25%"}]}>
        <TextInput value={email} style={tw`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
         focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
          dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder='Email'  onChangeText={(text) => setEmail(text)} ></TextInput>
       <TextInput secureTextEntry={true} value={password} style={tw`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
         focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
          dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder='Password'
          onChangeText={(text) => setPassword(text)}></TextInput>
       
        <TouchableOpacity  onPress={signIn} >
          <Text style={tw`font-semibold text-center`} > Sign in & Get Swiping</Text>
        </TouchableOpacity>
        </View>
      
      </ImageBackground>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
container: {
  marginHorizontal: 20,
  flex: 1,
  justifyContent: 'center'
},
input: {
  marginVertical: 4,
  height: 50, 
  borderWidth: 1,
  borderRadius: 4,
  padding: 10,
  backgroundColor: '#fff'
}
})