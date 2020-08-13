import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {globalStyles} from '../styles/global';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import LoginForm from './LoginForm';
import Articles from './Articles';

// import firebase from 'firebase/app';
import firebase from 'firebase';
import {Permissions, Notification} from 'expo';
// import 'firebase/auth';
// import fire from './fire';

import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './LoginScreen';
import LoadingScreen from './LoadingScreen';
import DashboardScreen from './DashboardScreen';


class Login extends Component {

    state = {
      loggedIn: null,
    }

    componentDidMount(){
      var firebaseConfig={
        apiKey: "AIzaSyAZ2sxZzDChgt1lLyEYssv3FQGzVjQ1sEM",
        authDomain: "ucanada-f9118.firebaseapp.com",
        databaseURL: "https://ucanada-f9118.firebaseio.com",
        projectId: "ucanada-f9118",
        storageBucket: "ucanada-f9118.appspot.com",
        messagingSenderId: "469980143557",
        appId: "1:469980143557:web:4cb928f2b5047bbee575ac",
        measurementId: "G-J44CMY0RRJ"
      };

      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

      firebase.auth().onAuthStateChanged(user=> {
        if(user){
          this.setState({
            loggedIn:true,
          })
          console.log(user);
          // var database = firebase.database();
          // var user = firebase.auth().currentUser;
            firebase.database().ref('/users/' + user.uid).set({
              Email:user.email,
              token:token
            });

        }else{
          this.setState({
            loggedIn:false
          })
        }
      })
    }

    renderContent = () =>{
      if(this.state.loggedIn == false){
        return <LoginForm/>
      }
      else{
        return <Articles/>
      }
    }
  
    render() {
      return(    
        <View style={styles.container}>
          {this.renderContent()}
        </View>
          );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      height:'100%',
      width:'100%'
    }
  })

export default Login;