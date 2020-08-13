import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native';
import { globalStyles } from '../styles/global';
import { createStackNavigator } from 'react-navigation-stack';

class LoadingScreen extends React.Component {
    render(){
        return (
            <View style={globalStyles.container}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
}

export default LoadingScreen;

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    left: 60,
  }});