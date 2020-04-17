import React, { useState, useEffect } from 'react';
import { View, Text, Picker, ScrollView, Button } from 'react-native';
import { AsyncStorage } from 'react-native';
import jwt_decode from 'jwt-decode';
import CameraRoll from "@react-native-community/cameraroll";

import api from '../../services/api';

import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';

class UserDetail extends React.Component {

    state = {
        token: '',
        user: {},
        categories: '',
    }

    _handleButtonPress = () => {
        CameraRoll.getPhotos({
            first: 20,

        })
            .then(r => {
                this.setState({ photos: r.edges });
            })
            .catch((err) => {
                //Error Loading Images
            });
    };

    async getUser(id) {
        const options = {
            headers: { 'Authorization': `Token ${this.state.token}` }
        }
        const response = await api.get(`users/${id}`, options);
        this.setState({ user: response.data })
    }

    decoder(token) {
        const userCredentials = jwt_decode(token);
        this.getUser(userCredentials.user_id);
    }

    async componentDidMount() {
        const value = await AsyncStorage.getItem('store');
        this.setState({ token: value });
        this.decoder(this.state.token);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.userDataSection}>
                    <Text style={styles.labelUserData}>Name: {this.state.user.username}</Text>
                    <Text style={styles.labelUserData}>Subscription Date: {String(this.state.user.date_joined).slice(0, 10)}</Text>
                    <Text style={styles.labelUserData}>Email: {this.state.user.email}</Text>
                    <Text style={styles.labelUserData}>Phone: 0401 713 254</Text>
                    <Text style={styles.labelUserData}>Location: Adelaide</Text>
                    <Text style={styles.labelUserData}>Helps: 200</Text>
                </View>


                <Text style={styles.sectionTitle}>Create your Help</Text>
                <ScrollView style={styles.helpSection}>
                    <Text style={styles.labels}>Item Name</Text>
                    <TextInput style={styles.inputHelps} />
                    <Text style={styles.labels}>Item Lenght</Text>
                    <TextInput style={styles.inputHelps} />
                    <Text style={styles.labels}>Item Height</Text>
                    <TextInput style={styles.inputHelps} />
                    <Text style={styles.labels}>Item Weight</Text>
                    <TextInput style={styles.inputHelps} />
                    <Text style={styles.labels}>Item Amount</Text>
                    <TextInput style={styles.inputHelps} />
                    <Text style={styles.labels}>Item Description</Text>
                    <TextInput style={styles.textDescription}
                        multiline={true} />
                    <Text style={styles.labels}>Item Location</Text>
                    <TextInput style={styles.inputHelps} />
                    <Text style={styles.categories}>Category</Text>
                    <Picker
                        selectedValue={this.categories}
                        onValueChange={(itemValue, itemIndex) => { this.setState({ categories: itemValue }) }}>
                        <Picker.Item label="Eletronics" value="Eletronics" />
                        <Picker.Item label="Sports" value="Sports" />
                        <Picker.Item label="Home Things" value="Home Things" />
                        <Picker.Item label="Materials" value="Materials" />
                    </Picker>
                    <Button onPress={this._handleButtonPress} title="Item Photo" />
                </ScrollView>
            </View>
        )
    }
}

export default UserDetail;
