import {Text, View} from 'react-native';
import React, {Component} from 'react';

export default class Terms extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <Text
            style={{
              fontSize: 20,
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
              textAlign: 'center',
              marginHorizontal: 20,
              fontWeight: 'bold',
              backgroundColor: '#60226e',
              color: 'white',
            }}>
            Terms & Polices
          </Text>

          <Text style={{top: 30, width: 340, left: 7}}>
            Privacy Policies and Terms and Conditions (T&C) agreements are both,
            as the names imply, legally binding contracts. The main difference
            between these two types of agreements is this: A Privacy Policy
            agreement exists to protect your clients. A T&C agreement exists to
            protect you, the company.
          </Text>
        </View>
      </View>
    );
  }
}
