import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 24,
    },
    titleText:{
        fontFamily: 'Roboto-regular',
        fontSize: 20,
        color: '#333',
        textAlign: 'center',
        margin: 15,
    },
    bodyText: {
        fontFamily: 'Roboto-regular',
        fontSize: 17,
        color: '#333',
        margin: 15,
    },
    ratingText: {
        fontFamily: 'Roboto-regular',
        fontSize: 15,
        backgroundColor: 'violet',
        padding: 10,
        color: '#fff',
    },
    buttonStyle: {
        marginTop: 25,
        backgroundColor: 'blue',
        paddingHorizontal: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center',
    }
 
});

export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
}