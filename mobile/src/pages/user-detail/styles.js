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
    },
    sectionTitle: {
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 20,
    },
    helpSection: {
        paddingTop: 0,
    },
    categories: {
        paddingTop: 10,
        paddingBottom: 0,
    }, 
    textDescription: {
        height: 100,
        width: 350,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        paddingBottom: 5,
    },
    labels: {
        paddingTop: 10,
        fontSize: 15,
        paddingBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputHelps: {
        backgroundColor: '#ffffff',
        width: 350,
        height: 50,
        borderRadius: 10,
        height: 30,
        marginTop: 10,
        
    },
    userDataSection: {
        fontSize: 10,
        backgroundColor: '#aebfae',
        borderWidth: 2,
        borderRadius: 5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        height: 120,
    }, 
    labelUserData: {
        fontSize: 15,
    },
    sendHelp: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
    sendHelpText: {
        fontSize: 30,
    }
});