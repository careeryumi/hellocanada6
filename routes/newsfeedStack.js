import { createStackNavigator } from 'react-navigation-stack';
import NewsFeed from '../screens/newsfeed';
import Header from '../shared/header';
import React from 'react';


const screens = {
  NewsFeed: {
    screen: NewsFeed,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Newsfeed' />,
      }
    }
  },
}

const NewsFeedStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default NewsFeedStack;