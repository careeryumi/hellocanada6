import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Ontario from '../screens/ontario';

const screens = {
  Ontario: {
    screen: Ontario,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title=' Ontario' navigation={navigation} />
      }
    },
  },
}

const OnatrioStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default OnatrioStack;