import React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import {globalStyles} from '../styles/global';
// import firebase from 'firebase/app';
import firebase from 'firebase';
// import 'firebase/auth';
import Expo from 'expo';
// import * as Google from 'expo-google-app-auth';

class EmailAndPassword extends Component {

  // googleSignUpPress = async()=> {
  //       try {
  //         const result = await Google.logInAsync({
  //           behavior:'web',
  //           androidClientId: 402776916324-bmqt3q3651u738i1keeuknsnpfq7h9lr.apps.googleusercontent.com,
  //           // iosClientId: YOUR_CLIENT_ID_HERE,
  //           scopes: ['profile', 'email'],
  //         });
      
  //         console.log("ab");
  //         if (result.type === 'success') {
  //           console.log("success");
  //           return result.accessToken;
  //         } else {
  //           console.log("fail");
  //           // return { cancelled: true };
  //         }
  //       } catch (e) {
  //         console.log("error");
  //         // return { error: true };
  //       }
  //     }

    state={
        email:'',
        password:'',
        error:'',
        loading:false
    }

    onBottomPress = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.onLoginSucess)
        .catch(error =>{this.setState({
            error:error.message
        })})

    }

    onSignUpPress = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.onLoginSucess)
        .catch(error =>{this.setState({
            error:error.message
        })})
    }

    onLoginSucess = () => {
        this.setState({
            error:'',
            loading:false
        })
    }

    render() {
      return(    
        <View style={styles.container}>
            <TextInput 
                placeholder="email" 
                style={styles.input} 
                value = {this.state.email}
                onChangeText={email=> this.setState({email})}
                />
            <TextInput 
                placeholder="password" 
                style={styles.input} 
                value = {this.state.password}
                onChangeText={password=> this.setState({password})}
                />
            <TouchableOpacity style={styles.buttonContainer} onPress= {this.onBottomPress}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress= {this.onSignUpPress}>
                <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonContainer} onPress= {this.googleSignUpPress}>
                <Text style={styles.buttonText}>google sign up</Text>
            </TouchableOpacity>


            <Text style={styles.errorText}>
                    {this.state.error}
            </Text>

            {/* <Button title="Sign in with google" onPress={()=>this.signInWithGoogleAsync()}></Button> */}
        </View>
          );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:20,
      backgroundColor:'#ffe0cf'
    },
    input:{
        height:50,
        width:400,
        paddingLeft: 10,
        marginBottom: 15,
        borderRadius: 5,
        fontSize:15,
        backgroundColor:'grey',
    },
    errorText:{
        fontSize:15,
        color:'red',
        alignSelf:'center',
        marginTop:10
    },
    buttonText:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:20,
    },
    buttonContainer:{
        backgroundColor:'#7ec590',
        marginBottom: 15,
        padding:15,
        borderRadius:8
    }
  })

export default EmailAndPassword;