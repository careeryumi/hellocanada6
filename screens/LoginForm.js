import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Logo from './Logo';
import EmailAndPassword from './EmailAndPassword';

const LoginForm = () => {

    return (
        <View style ={styles.container}>
            {/* <View style={styles.logoContainer}>
                <Logo/>
            </View> */}
            <View style={styles.emailAndPassword}>
                <EmailAndPassword/>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    logoContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    emailAndPassword:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
});

export default LoginForm;