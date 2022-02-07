
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

    const [mail, onChangeLogin] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    const Stack = createNativeStackNavigator();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "email": mail,
        "password": password
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const loginFunction = () => {
        fetch("http://snapi.epitech.eu:8000/connection", requestOptions)
            .then(response => response.json())
            .then(response => { console.log(response);
                msg = response.data;
                email = response.data.email; 
                token = response.data.token;
            })
            .then(result => console.warn(result))
            .catch(error => console.log('error', error));
    };

    return (

        <View style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo.png")} />

            <Text style={styles.text}>** Welcome to snapchat **</Text>
            <Text style={styles.text}>Connection</Text>
            <TextInput style={styles.input}
                onChangeText={onChangeLogin}
                value={mail}
                placeholder="email"
            />
            <TextInput secureTextEntry={true} style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="password"
            />

            <TouchableOpacity
                onPress={() => props.navigation.navigate('register')}
            >
                <Text style={styles.nav}>Pas encore inscrit ? cliquez ici !</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button_submit}
                onPressIn={loginFunction()}
                onPressOut={() => {
                    if(msg !== "Incorrect email or password"){
                    // props.navigation.navigate('board', { email : email, token : token })
                    props.navigation.navigate('contact', { email : email, token : token })
                }
                }}
            >
                <Text style={styles.button_submit}>Connection</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>

    );

}