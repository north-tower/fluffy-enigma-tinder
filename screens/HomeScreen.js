import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';



const HomeScreen = () => {
  const [user,setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user.displayName);
      setUser(user);
    });
  }, []);

  return (
    <SafeAreaView>
      <View>
         <TouchableOpacity>
         <Text>{user}</Text>
         </TouchableOpacity>
       </View>
    </SafeAreaView>
   
  )
}

export default HomeScreen

const styles = StyleSheet.create({})