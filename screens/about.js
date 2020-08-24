
import * as React from 'react';
import { View, Text, Button, Image, StyleSheet, ImageBackground } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';
import FlatButton from '../shared/button';


export default function About({ route, navigation }) {
    const { item } = route.params;
    const rating = item.rating;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
             
            <Card>
            <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
                <Text style={globalStyles.titleText}>{item.title}</Text>
                <Text style={globalStyles.bodyText}>{item.body}</Text>
                <View style={styles.rating}>
                    <Text>Rating: </Text>
                    <Image source={images.ratings[rating]} />
                </View>
            
                <FlatButton text='Indietro' onPress={() => navigation.goBack()} />
             
                </ImageBackground>
            </Card>
            
       
        </View>
    );
}
const styles = StyleSheet.create ({
    header:{
        width: '100%',
        height: '100%',
    },
    rating:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderColor: '#eee',
    }
})