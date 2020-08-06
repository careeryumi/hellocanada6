// import React from 'react';
// import {StyleSheet, View, Text} from 'react-native';
// import {globalStyles} from '../styles/global';
// import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// import Logged from './Logged.js';

// import firebase from 'firebase';
// import fire from './fire';

// class LoginPage extends React.Component{

//     signUp() {
//         const email = document.querySelector('#email').value;
//         const password = document.querySelector('#password').value;
//         fire.auth().createUserWithEmailAndPassword(email, password)
//           .then((u) => {
//             console.log('Successfully Signed Up');
//           })
//           .catch((err) => {
//             console.log('Error: ' + err.toString());
//           })
//     }
  
//     login() {
//         const email = document.querySelector('#email').value;
//         const password = document.querySelector('#password').value;
//         fire.auth().signInWithEmailAndPassword(email, password)
//           .then((u) => {
//             console.log('Successfully Logged In');
//           })
//           .catch((err) => {
//             console.log('Error: ' + err.toString());
//           })
//     }

//     render(){
//         return(
//             <View style={{ textAlign: 'center' }}>
//               <Text>Email</Text>
//               <input id="email" placeholder="Enter Email.." type="text"/>
//               <Text>Password</Text>
//               <input id="password" placeholder="Enter Password.." type="text"/>
//             <button style={{margin: '10px'}} onClick={this.login}>Login</button>
//             <button style={{margin: '10px'}} onClick={this.signUp}>Sign Up</button>
//           </View>
//         )
//     }
// }


// export default LoginPage;
