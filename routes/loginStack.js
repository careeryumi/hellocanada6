import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header navigation={navigation} title=' Login' />,
        }
      }
    },
  }
  
  const LoginStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
      headerTintColor: '#444',
      headerStyle: { backgroundColor: '#eee', height: 60 },
    }
  });
  
  export default LoginStack;