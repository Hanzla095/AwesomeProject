import {Text, View, TextInput} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

export default class Search extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          marginHorizontal: 20,
          top: 20,
          borderRadius: 10,
          elevation: 5,
        }}>
        <Icon name="search1" size={20} style={{top: 15, left: 10}} />
        <TextInput placeholder="Search" style={{left: 20}} />
      </View>
    );
  }
}
