import {Text, View, TextInput} from 'react-native';
import React, {Component} from 'react';

const Input = props => {
  return (
    <View>
      <TextInput
        style={{
          backgroundColor: 'lightgrey',
          width: 330,
          left: 15,
          borderRadius: 10,
          marginVertical: 5,
        }}
        placeholder={props.placeholder}
      />
    </View>
  );
};

export default Input;
