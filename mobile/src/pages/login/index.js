import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';
import jwt_decode from 'jwt-decode';

import api from '../../services/api';
import styles from './styles';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState();
    const [wrong, setWrong] = useState(false);
    const [userData, setUserData] = useState();

    const navigation = useNavigation();

    function navigationToRegister() {
        navigation.navigate('form-register');
    }

    function wrongUserPass() {
        setTimeout(() => {
            setWrong(false);
        }, 3000);
        return (
            <View style={styles.wrongBanner}>
                <Text style={styles.errorMsg}>Wrong Credentials</Text>
            </View>
        )
    }

    async function getUser(id) {
        const options = {
            headers: { 'Authorization': `Token ${token}` }
        }
        try {
            const response = await api.get(`users/${id}`, options)
            await AsyncStorage.setItem('user', JSON.stringify(response.data))
        } catch(error) {
            console.log('error ====', error);
        }
    }

    _storeData = async (response) => {
        try {
            const { access } = response.data;
            const userCredentials = jwt_decode(access);
            setToken(access);
            getUser(userCredentials.user_id);
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
            if (error.request.status === 400) {
                setWrong(true);
            }
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
            {wrong ? wrongUserPass() : <Text></Text>}
        </View>
    )
}