import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';



export default function Hello() {

  return (
    <View>
      <Text style={styles.header}>ABOUT HELLOCANADA.CA</Text>
      <Text style={styles.header}>OUR MISSION AND VISION</Text>
      <Text  style={styles.item}>Nurturing: Hello Canada helps people to make their own plans for immigration to Canada</Text>
      <Text  style={styles.item}>Passionate: People who use Hello Canada.ca are passionate,adventurous, and curious</Text>
      <Text  style={styles.item}>Informative: Hello Canada provides the right information</Text>
      <Text  style={styles.item}>Solution-driven: Hello Canada is the right solution for each user</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    left: 60,
  },
  item:{
    width:"80%",
    backgroundColor:"#ffe0cf",
    borderRadius:10,
    padding:10,
    marginBottom:10,
    marginLeft:10,
    flexDirection:"row",
    alignSelf:'center',
    fontSize: 15
  },
  header:{
    fontSize:20,
    fontWeight:"bold",
    color:"#364f6b",
    marginBottom:10,
    alignSelf:'center',
    marginTop:10,
  },
});