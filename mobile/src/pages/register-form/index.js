import React, { useState } from 'react';
import { View, Button, Text, TextInput, TouchableOpacity } from 'react-native';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';


import styles from './styles';

export default function RegisterForm() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigation = useNavigation();


    function redirectToLogin() {
        navigation.navigate('login');
    }

    async function createUser() {
        const response = await api.post(`register/`, {
            username: username,
            email: email,
            password: password
        }).then(function (response) {
            redirectToLogin();
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.labels}>Name</Text>
            <TextInput style={styles.inputs} onChangeText={text => setUsername(text)} />
            <Text style={styles.labels}>Email</Text>
            <TextInput style={styles.inputs}
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={text => setEmail(text)} />
            <Text style={styles.labels}>Password</Text>
            <TextInput style={styles.inputs} secureTextEntry={true} onChangeText={text => setPassword(text)} />
            <TouchableOpacity style={styles.registerButton} onPress={createUser}>
                <Text>Register</Text>
            </TouchableOpacity>
        </View >
    )
}