import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Manitoba from '../screens/manitoba';

const screens = {
    Manitoba: {
    screen: Manitoba,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title=' Manitoba' navigation={navigation} />
      }
    },
  },
}

const ManitobaStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default ManitobaStack;