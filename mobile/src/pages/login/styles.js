import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputs: {
        backgroundColor: '#ffffff',
        width: 350,
        height: 50,
        borderRadius: 10,
        height: 30,
        marginTop: 10
    },
    labels: {
        marginTop: 10,
    },
    enterButton: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#4287f5",
        width: 100,
        borderRadius: 5,
        height: 50,
        flexDirection: 'row',
    },
    registerButton: {
        marginTop: 30,
    },
    errorMsg: {
        color: "#a83232",
    }, 
    wrongBanner: {
        marginTop: 100,
        backgroundColor: '#d48c85',
        borderRadius: 10,
        fontSize: 50,
        width: 350,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
});