import React, {Component} from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import { createStackNavigator } from 'react-navigation-stack';

class LoginScreen extends React.Component {
    render(){
        return (
            <View style={globalStyles.container}>
                <Text>Login Screen</Text>
            </View>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    left: 60,
  }});