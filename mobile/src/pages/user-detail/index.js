import React, { useState, useEffect } from 'react';
import { View, Text, Picker, ScrollView, Button, TouchableOpacity } from 'react-native';
import { AsyncStorage } from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";
import { EvilIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


import api from '../../services/api';

import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';

export default function UserDetail() {

    const [token, setToken] = useState();
    const [user, setUser] = useState({});
    const [itemName, setItemName] = useState();
    const [description, setDescription] = useState();
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState();
    const [image, setImage] = useState();




    async function decoder() {
        const value = await AsyncStorage.getItem('user');
        const { id, username, email, date_joined } = JSON.parse(value);
        const user = {
            "id": id,
            "username": username,
            "email": email,
            "date_joined": date_joined
        }
        setUser(user);
    }

    useEffect(() => {
        decoder();
    }, []);

    async function createHelp() {
        try {
            const response = await api.post('helps/', {
                "user": user.id,
                "help_conditions": false,
                "product": {
                    "name": itemName,
                    "description": description,
                    "category": {
                        "name": category
                    }
                },
                "location": location,
                "image": image,
            });
        } catch (error) {
            console.log("error", error);
        }
    }

    async function pickImage() {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            setImage(result.uri);
            if (!result.cancelled) {
                setImage(result.uri);
            }
        } catch (error) {
            console.log('error', error);
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.userDataSection}>
                <Text style={styles.labelUserData}>Name: {user.username}</Text>
                <Text style={styles.labelUserData}>Subscription Date: {String(user.date_joined).slice(0, 10)}</Text>
                <Text style={styles.labelUserData}>Email: {user.email}</Text>
                <Text style={styles.labelUserData}>Phone: 0401 713 254</Text>
                <Text style={styles.labelUserData}>Location: Adelaide</Text>
                <Text style={styles.labelUserData}>Helps: 200</Text>
            </View>
            <Text style={styles.sectionTitle}>Create your Help</Text>
            <ScrollView style={styles.helpSection}>
                <Text style={styles.labels}>Item Name</Text>
                <TextInput style={styles.inputHelps} onChangeText={setItemName} />
                <Text style={styles.labels}>Item Description</Text>
                <TextInput style={styles.textDescription}
                    multiline={true}
                    onChangeText={setDescription} />
                <Text style={styles.labels}>Item Location <EvilIcons name="location" size={40} /></Text>
                <TextInput style={styles.inputHelps} onChangeText={setLocation} />
                <TouchableOpacity onPress={pickImage}>
                    <EvilIcons name="camera" size={40} />
                </TouchableOpacity>
                <Text style={styles.categories}>Category</Text>
                <Picker
                    selectedValue={category}
                    onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
                    <Picker.Item label="Eletronics" value="Eletronics" />
                    <Picker.Item label="Sports" value="Sports" />
                    <Picker.Item label="Home Things" value="House Things" />
                    <Picker.Item label="Materials" value="Materials" />
                </Picker>
            </ScrollView>
            <TouchableOpacity style={styles.sendHelp}
                onPress={createHelp}
            >
                <Text style={styles.sendHelpText}><EvilIcons name="sc-telegram" size={40} /></Text>
            </TouchableOpacity>
        </View>
    )
}