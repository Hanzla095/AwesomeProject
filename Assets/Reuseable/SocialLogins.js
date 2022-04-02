import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const SocialLogins = defaultProps => {
  SocialLogins.defaultProps = {
    borderWidth: 5,
    borderColor: 'blue',
  };

  return (
    <TouchableOpacity
      style={[
        {
          borderColor: defaultProps.borderColor,
          borderRadius: 1,
          marginVertical: 10,
          marginHorizontal: defaultProps.marginHorizontal,
          borderWidth: defaultProps.borderWidth,
        },
      ]}>
      <View
        style={{
          padding: defaultProps.padding,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={defaultProps.icon} />
        <Text style={[styles.text, {color: defaultProps.borderColor}]}>
          {defaultProps.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginHorizontal: 10,
    fontSize: 19,

    textAlign: 'center',
  },
});
export default SocialLogins;
