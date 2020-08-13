import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';
import WebView from 'react-native-webview';

export default function Britishcolumbia() {

  return (
    <WebView
    source={{
      uri: 'https://www.welcomebc.ca/Immigrate-to-B-C'
    }}
    style={{ marginTop: 20 }}
  />
  );
}

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    left: 60,
  }});