import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native"
import { FIREBASE_AUTH } from '../FirebaseConfig';

const List = () => {
    const navigation = useNavigation();


  return (
    <View>
      <Text>List</Text>
      <Button onPress={() => FIREBASE_AUTH.signOut()} title='logout' />
    </View>
   )
}

export default List

const styles = StyleSheet.create({})