import React from 'react';
import {View, Text} from 'react-native';
import api from '../../services/api';

import styles from './styles';
// Mock View, don't forget to fix this view!!!
export default function UserDetail() {
    return (
        <View style={styles.container}>
            <Text style={styles.labels}>Name: Levy</Text>
            <Text style={styles.labels}>Subscription Date: 15/12/2019</Text>
            <Text style={styles.labels}>Email: teste@test.com</Text>
            <Text style={styles.labels}>Phone: +61 0401 713 254</Text>
            <Text style={styles.labels}>Location: Adelaide-Aus</Text>
            <Text style={styles.labels}>Helps: 10</Text>
        </View>
    )
}