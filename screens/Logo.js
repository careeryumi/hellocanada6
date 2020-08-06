import React, {Component} from 'react';
import { StyleSheet, View, Text , Image} from 'react-native';
import { globalStyles } from '../styles/global';

const Logo = () => {
    return (
        <View>
            <Image source = {require('../assets/heart_logo.png')} style={{height:150, width:150}}/>
        </View>
    )
}

export default Logo;