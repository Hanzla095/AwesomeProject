import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {inputs} from '../src/utils/Styles';

const Passwordinput = () => {
  const [text, setText] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <TextInput
      style={inputs.Paper}
      label="Password"
      secureTextEntry={passwordVisible}
      right={
        <TextInput.Icon
          name={passwordVisible ? 'eye' : 'eye-off'}
          onPress={() => setPasswordVisible(!passwordVisible)}
        />
      }
    />
  );
};

export default Passwordinput;
