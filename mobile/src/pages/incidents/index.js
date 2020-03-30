import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, TextInput } from "react-native";
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import styles from './styles';


export default function Incidents() {
    const [products, setProduct] = useState([]);
    const [count, setCount] = useState(0);
    const [pages, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigationToDetail(product) {
        navigation.navigate('detail', { product });
    }

    async function loadProducts() {
        if (loading) {
            return;
        }

        if (count > 0 && products.length === count) {
            return;
        }
        setLoading(true);

        const response = await api.get(`products`, {
            params: { pages }
        });
        setProduct(response.data.results.slice(products));
        setCount(response.data.count)
        setPage(pages + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Any Helps</Text>
            </View>
            <Text style={styles.title}>Find what you want</Text>
            <View style={styles.searchBox}>
                <MaterialIcons name='search' size={30}></MaterialIcons>
                <TextInput style={styles.searchInput} />
            </View>

            <View style={styles.incidentList}>
                <FlatList
                    data={products}
                    style={styles.incidentList}
                    keyExtractor={product => String(product.id)}
                    // showsVerticalScrollIndicator={false}
                    onEndReached={loadProducts}
                    onEndReachedThreshold={0.2}
                    renderItem={({ item: product }) => (
                        <View style={styles.incident}>
                            <Text style={styles.incidentProperty}>{product.name}</Text>
                            <Image style={styles.image} source={{ uri: product.image }} />
                            <Text style={styles.incidentValue}>{product.description}</Text>
                            <TouchableOpacity
                                style={styles.detailsButton}
                                onPress={() => navigationToDetail(product)}>
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