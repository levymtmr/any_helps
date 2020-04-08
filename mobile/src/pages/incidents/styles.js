import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 15,
        color: '#737380',
    },
    headerTextBold: {
        fontWeight: 'bold',
    },
    incident: {
        paddingTop: 1,
    },  
    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',
    },
    incidentList: {
        marginTop: 32,
        borderRadius: 8, 
        backgroundColor: '#EEE',
        marginBottom: 16,
    },
    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    }, 
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 10,
        color: '#737380'
    }, 
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailsButtonText: {
        color: '#e02041',
        paddingBottom: 30
    },
    image: {
        width:350,
        height:200,
    },
    searchInput: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        height: 30,
        width: 320,
    },
    searchBox: {
        flexDirection: 'row',
    },
    userButton: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: 'flex-end',
    }
})