import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, TextInput } from "react-native";
import { Feather, MaterialIcons, EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import styles from './styles';


export default function Helps() {
    const [helps, setHelps] = useState([]);
    const [count, setCount] = useState(0);
    const [pages, setPage] = useState(1);
    const [loading, setLoading] = useState(false);


    const navigation = useNavigation();

    function navigationToDetail(help) {
        navigation.navigate('detail', { help });
    }

    function navigationToUser() {
        navigation.navigate('user-detail');
    }

    async function searchHelps(help) {
        const response = await api.get(`helps/`, {
            params: { help }
        });
        setHelps(response.data.results);
    }

    async function loadHelps() {
        if (loading) {
            return;
        }

        if (count > 0 && helps.length === count) {
            return;
        }
        setLoading(true);

        const response = await api.get(`helps/`, {
            params: { pages }
        });
        setHelps(response.data.results);
        setCount(response.data.count);
        setPage(pages + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadHelps();
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.userButton}
                onPress={() => navigationToUser()}
            >
                <EvilIcons name="user" size={40} />
            </TouchableOpacity>
            <View style={styles.header}>
                <Text style={styles.headerText}>Any Helps</Text>
            </View>
            <Text style={styles.title}>Find what you want</Text>
            <View style={styles.searchBox}>
                <TouchableOpacity>
                    <MaterialIcons name='search' size={30}></MaterialIcons>
                </TouchableOpacity>
                <TextInput onChangeText={text => searchHelps(text)} style={styles.searchInput} />
            </View>

            <View style={styles.incidentList}>
                <FlatList
                    data={helps}
                    style={styles.incidentList}
                    keyExtractor={help => String(help.id)}
                    // showsVerticalScrollIndicator={false}
                    onEndReached={loadHelps}
                    onEndReachedThreshold={0.2}
                    renderItem={({ item: help }) => (
                        <View style={styles.incident}>
                            <Text style={styles.incidentProperty}>{help.product.name}</Text>
                            {help.product.image != null ? <Image style={styles.image} source={{ uri: help.product.image }} /> :
                                <View style={styles.withoutImage}>
                                    <MaterialIcons name="image" size={200}></MaterialIcons>
                                </View>}
                            <Text style={styles.incidentValue}>{help.product.description}</Text>
                            <TouchableOpacity
                                style={styles.detailsButton}
                                onPress={() => navigationToDetail(help)}>
                                <Text style={styles.detailsButtonText}>
                                    More Details
                                </Text>
                                <Feather name="arrow-right" size={16} color="#E02041" />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}