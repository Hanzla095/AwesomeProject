import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';

import Icon from 'react-native-vector-icons/AntDesign';
import {inputs} from '../src/utils/Styles';

export default function InputPasState() {
  const [input, setinput] = useState('eye');
  const [hide, sethide] = useState(true);

  const Update = () => {
    if (hide === true) {
      sethide(false);
      setinput('search1');
    } else {
      sethide(true);
      setinput('eye');
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TextInput
        style={inputs.textinput}
        secureTextEntry={hide}
        outli
        label="Password"
      />
      <TouchableOpacity onPress={Update}>
        <Icon name={input} size={30} style={{right: '60%'}} />
      </TouchableOpacity>
    </View>
  );
}
