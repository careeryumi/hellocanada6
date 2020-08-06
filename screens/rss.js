import React from 'react';
// import {StyleSheet, View, Text, ActivityIndicator, FlatList, Dimensions} from 'react-native';
import {StyleSheet, View, Text, ActivityIndicator, FlatList, Dimensions, Image, TouchableWithoutFeedback, Linking, share, Share} from 'react-native';
import {globalStyles} from '../styles/global';
import * as rssParser from 'react-native-rss-parser';

export default class Rss extends React.Component{
    state={
        news:[],
        loading: true
    }


    fetchnews = () =>{
        fetch('https://www.canada.ca/en/immigration-refugees-citizenship.atom.xml')
        .then((rest) => rest.text())
        .then(async (responseData) => {
          const rss = await rssParser.parse(responseData);
          this.setState({
            news: rss.items,
            loading: false
            });
          console.log(rss.title);
          console.log(rss.updated);
          console.log(rss.entry)
          // console.log(rss.items.length);
        });
    }

    componentDidMount(){

      this.fetchnews()
  }
    render(){
           return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{fontSize:25, color:'#1f2916'}}>Government Rss</Text>
                    {/* <Text style={{fontSize:35, color:'#fff'}}>Headline</Text> */}
                </View>
                <View style={styles.news}>
                <FlatList 
                     data={this.state.news}
                    renderItem={({item})=>{
                        return (
                          <TouchableWithoutFeedback onPress={()=>Linking.openURL(item.id)}>
                            <View style ={{width:400, height: 90, backgroundColor:'#fff', marginBottom:15}}>
                                <View style={styles.gradient}>
                                <Text style={{position:'absolute', bottom:0, color:'#fff', fontSize:20, padding:5}}>{item.title}</Text>
                                </View>
                            </View>
                          </TouchableWithoutFeedback>
                    );
                    }}
                 />
                 </View>
           </View>
            );
    }
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#ffe0cf'
  },
  header:{
      padding:30
  },
  news:{
      alignSelf: 'center'
  },
  gradient :{
      width:'100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      // borderRadius:15
  }

})