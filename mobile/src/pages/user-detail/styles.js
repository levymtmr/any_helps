import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    inputs: {
        backgroundColor: '#ffffff',
        width: 350,
        height: 50,
        borderRadius: 10,
        height: 30,
        marginTop: 10,
    },
    labels: {
        marginTop: 10,
    },
    registerButton: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#4287f5",
        width: 100,
        borderRadius: 5,
        height: 50,
        flexDirection: 'row',
    }
});