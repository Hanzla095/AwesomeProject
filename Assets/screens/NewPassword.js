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

export default class NewPassword extends Component {
  render() {
    return (
      <View
        style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../images/imf/Mobile.png')}
            style={styles.img00}
          />
        </View>

        <View>
          <Text
            style={{
              textAlign: 'center',
              color: '#60226e',
              fontSize: 18,
              top: 5,
              fontWeight: 'bold',
            }}>
            Create New Password
          </Text>
        </View>

        <View style={styles.Input}>
          <TextInput
            placeholder="New Password"
            style={styles.txtinput}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.Input}>
          <TextInput
            placeholder="Confirm Password"
            style={styles.txtinput}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.Code}>
          <View>
            <TouchableOpacity
              onPress={() => {
                alert('Password Created Now you can login from login Page');
              }}>
              <Text style={styles.Code00}>Create Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img00: {
    height: 200,
    width: 300,
    alignItems: 'center',
  },
  Txt: {
    width: 300,
    marginHorizontal: 35,
  },
  Txt00: {
    fontWeight: '500',
  },
  Input: {
    backgroundColor: 'lightgrey',
    height: 40,
    marginHorizontal: 30,
    flexDirection: 'row',
    elevation: 1,
    borderRadius: 5,
    marginVertical: 7,
    top: 20,
  },
  txtinput: {
    left: 10,
  },
  icon: {
    left: 180,
    top: 7,
  },
  Code00: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#60226e',
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 15,
  },
  Code: {
    top: 30,
  },
});
