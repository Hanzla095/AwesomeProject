import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/Entypo';
export default class Loggin extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.logo1}>
          <Icon name="arrowleft" size={28} color="purple" />
        </View>
        <View style={styles.maincontainer}>
          <View>
            <Text style={styles.login}>Login</Text>
          </View>
          <View style={styles.inp1}>
            <TextInput placeholder="Email or Phone" />
            <Icon1 name="email" style={styles.logo2} />
          </View>
          <View style={styles.inp2}>
            <TextInput placeholder="Password" secureTextEntry={true} />
            <Icon name="eyeo" style={styles.logo3} />
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity>
              <Text style={styles.pass}>I forgot my password</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Online');
              }}>
              <Text style={styles.lg}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.or}>________Or________</Text>
          </View>
          <View style={styles.google}>
            <Text style={{left: 45, top: 7}}>Continue with Google</Text>
            <Icon3 name="google" color={'#3cba54'} style={styles.logo4} />
          </View>
          <View style={styles.fb}>
            <Text style={{left: 45, color: 'white', top: 5}}>
              Continue with Facebook
            </Text>
            <Icon3 name="facebook" style={styles.logo4} color={'white'} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
  },
  login: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'DancingScript-VariableFont_wght',
    color: 'purple',
    bottom: 20,
  },
  inp1: {
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    marginHorizontal: 15,
    elevation: 1,
    borderRadius: 10,
    paddingHorizontal: 9,
  },
  inp2: {
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    marginHorizontal: 15,
    elevation: 1,
    borderRadius: 10,
    paddingHorizontal: 9,
  },
  pass: {
    color: 'purple',
  },
  lg: {
    backgroundColor: 'purple',
    paddingVertical: 15,
    textAlign: 'center',
    marginHorizontal: 22,
    borderRadius: 12,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  or: {
    bottom: 60,
  },
  google: {
    backgroundColor: 'white',
    fontSize: 15,
    marginHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 1,
  },
  fb: {
    backgroundColor: 'dodgerblue',
    fontSize: 15,
    marginHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    top: 10,
    elevation: 1,
  },
  logo2: {
    left: 180,
    fontSize: 20,
    top: 15,
  },
  logo3: {
    left: 205,
    fontSize: 20,
    top: 15,
  },
  logo4: {
    left: 20,
    fontSize: 15,
    bottom: 10,
  },
});
