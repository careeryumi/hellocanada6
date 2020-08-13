import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Britishcolumbia from '../screens/britishcolumbia';

const screens = {
  Britishcolumbia: {
    screen: Britishcolumbia,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title=' British Columbia' navigation={navigation} />
      }
    },
  },
}

const BritishcolumbiaStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default BritishcolumbiaStack;