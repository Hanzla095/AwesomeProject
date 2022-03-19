import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Enter 4 Digits OTP Code
          </Text>
          <View style={{flexDirection: 'row', top: 20, left: 8}}>
            <View style={{borderWidth: 1, width: 50, height: 40}}>
              <TextInput placeholder="___" style={{left: 10}} />
            </View>
            <View style={{borderWidth: 1, width: 50, height: 40}}>
              <TextInput placeholder="___" style={{left: 10}} />
            </View>
            <View style={{borderWidth: 1, width: 50, height: 40}}>
              <TextInput placeholder="___" style={{left: 10}} />
            </View>
            <View style={{borderWidth: 1, width: 50, height: 40}}>
              <TextInput placeholder="___" style={{left: 10}} />
            </View>
          </View>
        </View>
        <View style={{top: 50}}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('New');
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                backgroundColor: '#60226e',
                padding: 12,
                borderRadius: 10,
                paddingHorizontal: 40,
              }}>
              Confirm
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{top: 90}}>
          <TouchableOpacity>
            <Text
              style={{
                backgroundColor: '#60226e',
                color: 'white',
                padding: 10,
                borderRadius: 10,
                paddingHorizontal: 20,
                fontWeight: 'bold',
              }}>
              Send Code Again
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
