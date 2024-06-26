import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './screens/LoginScreen'
import List from './components/List';
import { User } from 'firebase/auth'
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator()

function InsideLayout ()  {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="Inside" component={List}  options={{
                headerShown: false,
              }}/>
    </InsideStack.Navigator>
  )
}


export default function App() {  
  const [user,setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" defaultScreenOptions={{
        headerShown: false,
      }}> 
      {user ?(
        <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{
                headerShown: false,
              }} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen}  options={{
                headerShown: false,
              }} />

      
      )}

      
      </Stack.Navigator>
    </NavigationContainer>
   
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
