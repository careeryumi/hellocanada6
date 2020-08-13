import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground,} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

// stacks
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import LoginStack from './loginStack';
import RssStack from './rssStack';
import NewsFeedStack from './newsfeedStack';
import HelloStack from './helloStack';
import OntarioStack from './ontarioStack';
import BritishcolumbiaStack from './britishcolumbiaStack';
import AlbertaStack from './albertaStack';
import ManitobaStack from './manitobaStack';
import TestStack from './testStack';


// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: AboutStack,
    navigationOptions:{
      drawerIcon: <Icon name="ios-home" color="#ff3543" size={28}/>
    }
  },
  Forum: {
    screen: HomeStack,
    navigationOptions:{
      drawerIcon: <Icon name="ios-star" color="#ff3543" size={28}/>
    }
  },
  "Goverment of Canada News":{
    screen: RssStack,
    navigationOptions:{
      drawerIcon: <Icon name="ios-radio" color="#ff3543" size={28}/>
    }
  },
  "Immigration NewsFeed": {
    screen: NewsFeedStack,
    navigationOptions:{
      drawerIcon: <Icon name="ios-mic" color="#ff3543" size={28}/>
    }
  },
  "Ontario": {
    screen: OntarioStack,
    navigationOptions:{
      drawerIcon: <Icon name="ios-arrow-forward" color="#ff3543" size={28}/>
    }
  },
  "British Columbia": {
    screen: BritishcolumbiaStack,
    navigationOptions:{
      drawerIcon: <Icon name="ios-arrow-forward" color="#ff3543" size={28}/>
    }
  },
  "Alberta": {
    screen: AlbertaStack,
    navigationOptions:{
      drawerIcon: <Icon name="ios-arrow-forward" color="#ff3543" size={28}/>
    }
  },
  "Manitoba": {
    screen: ManitobaStack,
    navigationOptions:{
      drawerIcon: <Icon name="ios-arrow-forward" color="#ff3543" size={28}/>
    }
  },
  "About HelloCanada":{
    screen: HelloStack,
    navigationOptions:{
      drawerIcon: <Icon name="ios-cube" color="#ff3543" size={28}/>
    }
  },
  Login: {
    screen: LoginStack,
    navigationOptions:{
      drawerIcon: <Icon name="ios-log-in" color="#ff3543" size={28}/>
    }
  },
  Test: {
    screen: TestStack,
    navigationOptions:{
      drawerIcon: <Icon name="ios-log-in" color="#ff3543" size={28}/>
    }
  },
});

export default createAppContainer(RootDrawerNavigator);