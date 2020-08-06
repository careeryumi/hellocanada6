import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator, FlatList, Dimensions, Image, TouchableWithoutFeedback, Linking, share, Share} from 'react-native';
import {globalStyles} from '../styles/global';

export default class NewsFeed extends React.Component{
    state={
        news:[],
        loading: true
    }

    fetchnews = () =>{
        fetch('http://newsapi.org/v2/everything?q=immigration&top-headlines?country=ca&from=2020-08-04&sortBy=publishedAt&apiKey=59fc331f34fa4ea78811e929f7a8564a')
        .then((rest) => rest.json())
        .then((response)=>{
            this.setState({
                news: response.articles,
                loading: false
            })
        })
    }
    componentDidMount(){

        this.fetchnews()
    }
    sharearticle = async article => {
        try{
            await Share.share({
                message: 'Checkout this article' + article
            })
        }catch(error){
            console.log(error)
        }
    }
    render(){

           return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{fontSize:25, color:'#fff'}}>Ontario Newsfeed</Text>
                    {/* <Text style={{fontSize:35, color:'#fff'}}>Headline</Text> */}
                </View>
                <View style={styles.news}>
                    <FlatList 
                        data={this.state.news}
                        renderItem={({item})=>{
                            return (
                                <TouchableWithoutFeedback onPress={()=>Linking.openURL(item.url)}>
                                    <View style ={{width:400, height: 180, backgroundColor:'#fff', marginBottom:15}}>
                                        <Image source={{uri: item.urlToImage}} style= {[StyleSheet.absoluteFill]}/>
                                        <View style={styles.gradient}>
                                            <Text style={{position:'absolute', bottom:0, color:'#fff', fontSize:20, padding:5}}>{item.title}</Text>
                                            <Text style={{fontSize:16, color:'#fff', position:'absolute', top:0, right:0, padding:5, fontWeight:'bold'}} onPress={()=>this.sharearticle(item.url)}>Share</Text>
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
        backgroundColor:'#333'
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
