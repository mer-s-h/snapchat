
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

export default function loginForm(props) {

    const Stack = createNativeStackNavigator();

    var myHeaders = new Headers();
    myHeaders.append("token", "EPSd8AZFAxSUhdFuA1vFTmcN");
    myHeaders.append("Content-Type", "multipart/form-data");

    var raw = "{\n\"Content -Type\": \"multipart/form -data\",\n\"token \": \"EPSd8AZFAxSUhdFuA1vFTmcN\",\n\n\"duration \": 5,\n\"to\": \"Mimi@oki.com\",\n\"image \":  \"/home/wac/Images/Firefox_wallpaper.png\"\n}";

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const sendFunction = () => {
        fetch("http://snapi.epitech.eu:8000/snap", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (

        <View style={styles.container}>
            {/* <Image style={styles.logo} source={require("../assets/logo.png")} /> */}

            <TouchableOpacity
                style={styles.button_submit}
                onPressIn={loginFunction()}
                onPressOut={() => {
                    onPressIn = { sendFunction() }
                }}
            >
                <Text style={styles.button_submit}>send</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>

    );

}