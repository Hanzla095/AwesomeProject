import {Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

export default class Logout extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', marginVertical: 300}}>
        <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.replace('Main');
            }}>
            <Text
              style={{
                backgroundColor: 'purple',
                color: 'white',
                padding: 30,
                borderRadius: 20,
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
