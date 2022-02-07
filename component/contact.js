import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Button, TouchableWithoutFeedbackBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterForm from "./register";
import styles from "./style";

var email = null;
var token = null;
var msg = "";

export default function contact(props) {

    var myHeaders = new Headers();
    myHeaders.append("token", props.route.params.token);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };


    // const contactFunction = () => {
    fetch("http://snapi.epitech.eu:8000/all?=", requestOptions)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            msg = response.data;
            email = response.data.email;
            token = response.data.token;
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    // }

    return (
        // contactFunction(),

        <Text>{email}</Text>
    )

}