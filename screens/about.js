import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Image source={require('../assets/main.png')} style={styles.main}/>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    left: 60,
  }});