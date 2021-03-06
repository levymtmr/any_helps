import React from 'react';
import { View, TouchableOpacity, Image, Text, Linking } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';

import styles from './styles';


export default function Details() {

    const navigation = useNavigation();
    const route = useRoute();


    const help = route.params.help;

    const message = 'Hi!!';

    function navigateBack() {
        navigation.goBack();
    }

    function sendMain() {
        MailComposer.composeAsync({
            subject: 'testando o enviar email',
            recipients: ['teste@teste.com'],
            body: message,
        });
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone61401713254Gtext=${message}`);
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>{help.product.name}</Text>
                {/* <Image style={styles.image} source={{ uri: help.product.image }} /> */}
                {help.product.image != null ? <Image style={styles.image} source={{ uri: help.product.image }} /> :
                                <View style={styles.withoutImage}>
                                    <MaterialIcons name="image" size={200}></MaterialIcons>
                                </View>}
                <Text style={styles.incidentValue}>{help.product.description}</Text>
            </View>
            <View style={styles.contactBox}>
                <Text style={styles.itemTitle}>Located in {help.product.location}</Text>
                <Text style={styles.itemTitle}>Catch this Item</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action}
                        onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action}
                        onPress={sendMain}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}