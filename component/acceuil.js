import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Button, TouchableWithoutFeedbackBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "./style";
import RegisterForm from "./register";
import loginForm from "./login";


export default function acceuil(props) {

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo.png")} />

            <Text style={styles.text}>** Welcome to Snapchat **</Text>

            <View style={styles.viewOption}>
                <TouchableOpacity style={styles.option}
                    onPress={() =>
                        props.navigation.navigate('login')}
                >
                    <Text style={styles.button_submit}>connection</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}
                    // onPress={toRegister()}
                    onPress={() =>
                        props.navigation.navigate('register')}
                >
                    <Text style={styles.button_submit}>inscription</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export function welcome(props){
    return <Text style={styles.text}>** Welcome to Snapchat {props.name}**</Text>
}