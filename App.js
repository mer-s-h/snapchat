import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TextInput, Button, TouchableWithoutFeedbackBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as imagePicker from 'expo-image-picker';
import styles from "./component/style";
import RegisterForm from "./component/register";
import loginForm from "./component/login";
import acceuil from "./component/acceuil";
import board from "./component/board";
import contact from './component/contact';


const Stack = createNativeStackNavigator();


export default function App() {

  return (

    // loginForm()

    <NavigationContainer >

      <Stack.Navigator>
        {/* <Stack.Screen name="acceuil" component={acceuil} /> */}
        <Stack.Screen name="login" component={loginForm} />
        {/* <Stack.Screen name="register" component={RegisterForm} />
        <Stack.Screen name="board" component={board} /> */}
        <Stack.Screen name="contact" component={contact} />
      </Stack.Navigator>

    </NavigationContainer >

  )
}