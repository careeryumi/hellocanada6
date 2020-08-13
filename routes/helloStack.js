import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Hello from '../screens/hello';

const screens = {
  Hello: {
    screen: Hello,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title=' HelloCanada.ca' navigation={navigation} />
      }
    },
  },
}

const HelloStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default HelloStack;