import React from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Button, TouchableWithoutFeedbackBase } from 'react-native';
import styles from "./style";
import loginForm from './login';

export default function board(props) {
    console.log(props);
    console.log(props.route.params.token);
    console.log(props.route.params.email);
    return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.text}>** welcome to snapchat {props.route.params.email}**</Text>
    </View>
    );
}