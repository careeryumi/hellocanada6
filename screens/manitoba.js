import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';
import WebView from 'react-native-webview';

export default function Manitoba() {

  return (
    <WebView
    source={{
      uri: 'http://www.immigratemanitoba.com/immigrate-to-manitoba/'
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