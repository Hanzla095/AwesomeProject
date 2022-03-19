
import { Text, View,ImageBackground,StyleSheet,Te, TextInput,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
 <ImageBackground source={require('./images/7.jpg')}>
        <View style={styles.im}>
         
         


          
        </View>
        </ImageBackground>
        <TextInput style={styles.txt}
        placeholder='Phone or email'
        />
        <TextInput style={styles.txt1}
        placeholder='Password'
        />
        <TouchableOpacity>
        <Text style={styles.txt2}>
          Log In
        </Text>
        </TouchableOpacity>
        <Text style={styles.txt3}>
          Forgot Password?
        </Text>
        <Text style={{marginVertical:15,marginHorizontal:44}}>
          ------------------------------OR---------------------------------
        </Text>
        <TouchableOpacity>
        <Text style={styles.txt4}>
          Create new Facebook account
        </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles= StyleSheet.create({
im:{
  height:250,
  width:360,
  marginBottom:20,
},
txt:{
  fontSize:18,
  borderBottomWidth:0.2,
  marginHorizontal:40,
  marginTop:20
},
txt1:{
  fontSize:18,
  borderBottomWidth:0.2,
  marginHorizontal:40,
  marginTop:20
},
txt2:{
  fontWeight:'bold',
  marginTop:20,
  backgroundColor:'dodgerblue',
  color:'white',
  marginHorizontal:36,
  padding:10,
  textAlign:'center',
  borderRadius:5,
  fontSize:16
},
txt3:{
  marginTop:20,
  marginHorizontal:120,
  fontWeight:'bold',
  color:'dodgerblue'
},
txt4:{
  fontWeight:'bold',
  marginTop:20,
  backgroundColor:'green',
  color:'white',
  marginHorizontal:36,
  padding:9,
  textAlign:'center',
  borderRadius:5,
  fontSize:16,
  marginHorizontal:50
}

})