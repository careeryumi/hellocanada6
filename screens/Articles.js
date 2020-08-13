import React, {Component, useState} from 'react';
import { CheckBox, StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';
import { Permissions, Notifications } from 'expo';

// registerForPushNotificationsAsync = async () => {
//     if (Constants.isDevice) {
//       const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
//       let finalStatus = existingStatus;
//       if (existingStatus !== 'granted') {
//         const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
//         finalStatus = status;
//       }
//       if (finalStatus !== 'granted') {
//         alert('Failed to get push token for push notification!');
//         return;
//       }
//       const token = await Notifications.getExpoPushTokenAsync();
//       console.log(token);
//       this.setState({ expoPushToken: token });
//     } else {
//       alert('Must use physical device for Push Notifications');
//     }
  
//     if (Platform.OS === 'android') {
//       Notifications.createChannelAndroidAsync('default', {
//         name: 'default',
//         sound: true,
//         priority: 'max',
//         vibrate: [0, 250, 250, 250],
//       });
//     }
//     };

const Articles = () => {
    
    const [isSelected1, setSelection1] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);
    const [isSelected4, setSelection4] = useState(false);
    const [isSelected5, setSelection5] = useState(false);
    const [isSelected6, setSelection6] = useState(false);
    const [isSelected7, setSelection7] = useState(false);

    return (
        <View style ={styles.container}>
            <View style={styles.articleContainer}>
                <Text style={styles.heading}>
                Welcome!
                </Text>
                <Text style={styles.heading}>
                You are logged in
                </Text>
                <TouchableOpacity style={styles.submit} onPress={() => firebase.auth().signOut()}>
                    <Text style={{color:"white"}}>Logout</Text>
                </TouchableOpacity>           
            </View>

        <View style={styles.checkboxContainer}>
            <CheckBox
            value={isSelected1}
            onValueChange={setSelection1}
            style={styles.checkbox}
            />
            <Text style={styles.label}>Do you want recieve push notification? {isSelected1 ? "👍" : "👎"}</Text>
        </View>

        <Text style={styles.label}>Which province are you interested?</Text>

        <View style={styles.checkboxContainer}>
            <CheckBox
            value={isSelected2}
            onValueChange={setSelection2}
            style={styles.checkbox}
            />
            <Text style={styles.label}>Ontario {isSelected2 ? "👍" : "👎"}</Text>
        </View>

        <View style={styles.checkboxContainer}>
            <CheckBox
            value={isSelected3}
            onValueChange={setSelection3}
            style={styles.checkbox}
            />
            <Text style={styles.label}>British Columbia {isSelected3 ? "👍" : "👎"}</Text>
        </View>

        <View style={styles.checkboxContainer}>
            <CheckBox
            value={isSelected4}
            onValueChange={setSelection4}
            style={styles.checkbox}
            />
            <Text style={styles.label}>Alberta {isSelected4 ? "👍" : "👎"}</Text>
        </View>

        <View style={styles.checkboxContainer}>
            <CheckBox
            value={isSelected5}
            onValueChange={setSelection5}
            style={styles.checkbox}
            />
            <Text style={styles.label}>Manitoba {isSelected5 ? "👍" : "👎"}</Text>
        </View>

        <View style={styles.checkboxContainer}>
            <CheckBox
            value={isSelected6}
            onValueChange={setSelection6}
            style={styles.checkbox}
            />
            <Text style={styles.label}>New Brunswick {isSelected6 ? "👍" : "👎"}</Text>
        </View>

        <View style={styles.checkboxContainer}>
            <CheckBox
            value={isSelected7}
            onValueChange={setSelection7}
            style={styles.checkbox}
            />
            <Text style={styles.label}>Newfoundland {isSelected7 ? "👍" : "👎"}</Text>
        </View>

        <TouchableOpacity style={styles.submit}>
          <Text style={{color:"white"}}>Submit</Text>
        </TouchableOpacity>

        </View>
        
    )
}

const styles=StyleSheet.create({
    container:{
        marginLeft:30,
        paddingTop:0,
        // flex:1,
        // justifyContent:'center',
        // alignItems:'center'
    },
    articleContainer:{
        padding:1,
        borderBottomColor:'rgba(255,255,255,.7)',
        borderBottomWidth:5
    },
    heading:{
        fontSize:18,
        color:'black',
        padding:2,
        marginBottom:2
    },
    content:{
        marginTop:1,
        fontSize:19,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 5,
        alignItems:'center'
      },
      checkbox: {
        alignSelf: "center",
      },
      label: {
        margin: 8,
        fontSize:17,
      },
      submit:{
        width:"30%",
        backgroundColor:"#7ec590",
        borderRadius:10,
        padding:5,
        alignItems:"center",
        marginTop:20
      }
});

export default Articles;