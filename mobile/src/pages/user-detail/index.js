import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native';
import { AsyncStorage } from 'react-native';
import jwt_decode from 'jwt-decode';

import api from '../../services/api';

import styles from './styles';

class UserDetail extends React.Component {
    
    state = {
        token: '',
        user: {},
    }

    async getUser(id) {
        const options = {
            headers: {'Authorization':`Token ${this.state.token}`}
        }
        console.log("token =>>>>>", options.headers);
        const response = await api.get(`users/${id}`, options);
        console.log("response headers", response)
        this.setState({user: response.data})
    }
    
    decoder(token) {
        const userCredentials = jwt_decode(token);
        this.getUser(userCredentials.user_id);
    }
    
    async componentDidMount() {
        const value = await AsyncStorage.getItem('store');
        this.setState({token: value});
        this.decoder(this.state.token);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.labels}>Name: {this.state.user.username}</Text>
                <Text style={styles.labels}>Subscription {this.state.user.date_joined}</Text>
                <Text style={styles.labels}>Email: {this.state.user.email}</Text>
                <Text style={styles.labels}>Phone: need api adjust</Text>
                <Text style={styles.labels}>Location: need api adjust</Text>
                <Text style={styles.labels}>Helps: need api adjust</Text>
            </View>
        )
    }
}

export default UserDetail;
