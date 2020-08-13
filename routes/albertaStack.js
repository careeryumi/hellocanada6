import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Alberta from '../screens/alberta';

const screens = {
    Alberta: {
    screen: Alberta,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title=' Alberta' navigation={navigation} />
      }
    },
  },
}

const AlbertaStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default AlbertaStack;