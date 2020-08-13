import React from 'react';
import { StyleSheet, View, Text, Image, Linking } from 'react-native';
import { globalStyles } from '../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';
import WebView from 'react-native-webview'

export default function Alberta() {

  return (
    <WebView
    source={{
      uri: 'https://www.alberta.ca/NewsRoom/newsroom.cfm?numDaysBack=365&deptID=0'
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