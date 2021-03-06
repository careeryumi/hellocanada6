import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View, Image, ImageBackground,} from 'react-native';
import React from 'react';
import Header from '../shared/header';
import About from '../screens/about';
import Icon from 'react-native-vector-icons/Ionicons';




const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title=' HelloCanada.ca' navigation={navigation}/>
      }
    },
  },
}

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});


export default AboutStack;