import { Text, View,StyleSheet,ScrollView,Image,ImageBackground,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'lightgrey'}}>
        <ImageBackground source={require('./images/4.jpg')}>
        <View style={styles.header}>

        <Text style={styles.fb}>Facebk</Text>
       
        </View>
        </ImageBackground>
        <ScrollView>
        <Image source={require('./images/hh.jpg')}
        style={styles.img}/>
        <View style={styles.like}>
          <TouchableOpacity>
<Text style={{color:'blue',fontSize:20,borderWidth:2,textAlign:'center',borderRadius:10,padding:5}}>
Like </Text>
</TouchableOpacity>
<TouchableOpacity>
<Text style={{color:'blue',fontSize:20,borderWidth:2,textAlign:'center',borderRadius:10,padding:5}}>comment</Text>
</TouchableOpacity>
<TouchableOpacity>
<Text style={{color:'blue',fontSize:20,borderWidth:2,textAlign:'center',borderRadius:10,padding:5}}>share</Text>
</TouchableOpacity>
        </View>
         <Image source={require('./images/1.jpg')}
        style={styles.img}/> 
        <Image source={require('./images/2.jpg')}
        style={styles.img}/>
         <Image source={require('./images/3.jpg')}
        style={styles.img}/>
         <Image source={require('./images/4.jpg')}
        style={styles.img}/>


        

        </ScrollView>
        <ImageBackground source={require('./images/1.jpg')}>
        <View style={styles.footer}>
        <Text>
This is footer
        </Text>
        </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  img:{
    height:300,
    width:300,
    marginLeft:30,
    marginTop:30
  },
  fb:{
    fontSize:25,
    fontWeight:'bold',
    color:'blue'
    

  },
  header:{
    paddingVertical:20
  },
  footer:{
   padding:20,
  },
  like:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:1,
    color:'black',
    marginTop:0,
    padding:10,
    backgroundColor:'white'
  }



})