import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Forgot extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.img}>
          <Image
            source={require('../images/imf/forgot.png')}
            style={styles.img00}
          />
        </View>

        <View style={styles.Txt}>
          <Text style={styles.Txt00}>
            Oops! Seems like you forgot your Password! Enter your registered
            Email or Phone to get an OTP and create new password.
          </Text>
        </View>

        <View style={styles.Input}>
          <TextInput placeholder="Email or Phone" style={styles.txtinput} />

          <Icon name="mail-sharp" size={20} style={styles.icon} />
        </View>
        <View style={styles.Code}>
          <View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Otp');
              }}>
              <Text style={styles.Code00}>Get Code</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    alignItems: 'center',
    top: 130,
  },
  img00: {
    height: 200,
    width: 300,
  },
  Txt: {
    width: 300,
    top: 130,
    marginHorizontal: 35,
  },
  Txt00: {
    fontWeight: '500',
  },
  Input: {
    top: 150,
    backgroundColor: 'lightgrey',
    height: 40,
    marginHorizontal: 30,
    flexDirection: 'row',
    elevation: 1,
    borderRadius: 5,
  },
  txtinput: {
    left: 10,
  },
  icon: {
    left: 165,
    top: 7,
  },
  Code: {
    top: 180,
  },
  Code00: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#60226e',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 10,
  },
});
