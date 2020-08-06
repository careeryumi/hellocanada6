import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';

const Articles = () => {
    return (
        <View style ={styles.container}>
            <View style={styles.articleContainer}>
                <Text style={styles.heading}>
                    Welcome to the authorized screen
                </Text>
                <Text style={styles.content}>
                    You are logged in from firebase
                </Text>
                <TouchableOpacity style={{padding:20}} onPress={() => firebase.auth().signOut()}>
                    <Text style={{color:'#1B9CFC'}}>Logout</Text>
                </TouchableOpacity>           
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    articleContainer:{
        padding:10,
        borderBottomColor:'rgba(255,255,255,.7)',
        borderBottomWidth:5
    },
    heading:{
        fontSize:22,
        color:'black',
        padding:10,
        marginBottom:10
    },
    content:{
        marginTop:10,
        fontSize:19,
    }
});

export default Articles;