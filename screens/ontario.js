import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';
import WebView from 'react-native-webview';

export default function Ontario() {

  return (
    <WebView
    source={{
      uri: 'https://www.ontario.ca/page/ontario-immigrant-nominee-program-oinp'
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