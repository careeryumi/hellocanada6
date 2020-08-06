import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Rss from '../screens/rss';

const screens = {
  Rss: {
    screen: Rss,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='RSS' navigation={navigation} />
      }
    },
  },
}

const RssStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default RssStack;