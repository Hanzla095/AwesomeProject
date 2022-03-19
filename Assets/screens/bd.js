import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>

      

        <View style={{backgroundColor:'dodgerblue',marginHorizontal:150 ,height:500,}}>
          <Text style={{color:'white'}}>Button</Text>
        </View>


        <View>
          <Text style={{bottom:150, left:90}}>Practice</Text>
        </View>
      </View>
    )
  }
}