import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';

import api from '../../services/api';
import styles from './styles';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState();

    const navigation = useNavigation();

    function navigationToRegister() {
        navigation.navigate('form-register');
    }

    _storeData = async (response) => {
        try {
            const {access} = response.data;
            await AsyncStorage.setItem('store', access);
            
        } catch (error) {
            console.log(error);
        }
    };



    async function loginVerification() {
        try {
            const response = await api.post('token/',
                {
                    username: username,
                    password: password
                })
            _storeData(response);
            redirectToHelps();
        } catch (error) {
            console.log(error);
        }
    }

    function redirectToHelps() {
        navigation.navigate('helps');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.labels}>Login</Text>
            <TextInput style={styles.inputs} placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none" />
            <Text style={styles.labels}>Password</Text>
            <TextInput style={styles.inputs} placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry />
            <TouchableOpacity style={styles.enterButton} onPress={loginVerification}>
                <Text>Enter</Text>
            </TouchableOpacity>
            <Button style={styles.registerButton} title="Register" onPress={navigationToRegister} />
        </View>
    )
}