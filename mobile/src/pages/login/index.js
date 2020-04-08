import React, { useState } from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const navigation = useNavigation();

    function navigationToRegister() {
        navigation.navigate('form-register');
    }


    function loginVerification() {
        if (username) {
            redirectToHelps();
        }
    }

    function redirectToHelps() {
        navigation.navigate('incidents');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.labels}>Login</Text>
            <TextInput style={styles.inputs} onChangeText={(text)=> setUsername(text)}/>
            <Text style={styles.labels}>Password</Text>
            <TextInput secureTextEntry={true} style={styles.inputs} onChangeText={(text)=> setPassword(text)}/>
            <TouchableOpacity style={styles.enterButton} onPress={loginVerification}>
                <Text>Enter</Text>
            </TouchableOpacity>
            <Button style={styles.registerButton} title="Register" onPress={navigationToRegister}/>
        </View>
    )
}