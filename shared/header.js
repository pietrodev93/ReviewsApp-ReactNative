import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';


export default function Header({navigation}){
   
    return(
        <View style={styles.header}>
            <MaterialIcons name='menu' onPress={() => navigation} size={28} style={styles.icon} />
            <View>
                <Text style={styles.headerText}>Home</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16,
    }
});