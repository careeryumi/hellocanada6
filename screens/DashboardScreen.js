import React, {Component} from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import { createStackNavigator } from 'react-navigation-stack';

class DashboardScreen extends React.Component {
    render(){
        return (
            <View style={globalStyles.container}>
                <Text>Dashboard Screen</Text>
            </View>
        );
    }
}

export default DashboardScreen;

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    left: 60,
  }});