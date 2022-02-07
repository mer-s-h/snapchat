
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TextInput,TouchableOpacity, Button, TouchableWithoutFeedbackBase } from 'react-native';
import styles from "./style";

export default function RegisterForm(props) {

    const [mail, onChangeLogin] = React.useState("");
    const [password, onChangePassword] = React.useState("");

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
    
    const registerFunction = () => {
        fetch("http://snapi.epitech.eu:8000/inscription", requestOptions)
            .then(response => response.json())
            .then(result => {console.warn(result);})
            .catch(error => console.log('error', error))
    };


    return (

        <View style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo.png")} />

            <Text style={styles.text}>** Welcome to snapchat **</Text>
            <Text style={styles.text}>Inscription</Text>
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
                onPress={() => props.navigation.navigate('login')}
            >
                <Text style={styles.nav}>Déjà inscrit ? Pour vous connecter cliquez ici !</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button_submit}
                onPressIn={registerFunction()}
                onPressOut={() => props.navigation.navigate('login')}
            >
                <Text style={styles.button_submit}>inscription</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>

    );

}