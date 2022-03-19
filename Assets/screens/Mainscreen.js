import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Ionicons';
import RBSheet from 'react-native-raw-bottom-sheet';
import Terms from './Terms';
import * as Animatable from 'react-native-animatable';

export default class Mainscreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.MainContainer}>
          <View>
            <Text style={styles.login}>DevOps</Text>
          </View>
          <Animatable.View
            animation="slideInRight"
            style={{flexDirection: 'row'}}>
            <View style={styles.input}>
              <TextInput placeholder="Email or Phone" style={styles.Email} />
            </View>
            <View style={styles.icon}>
              <Icon name="mail" size={20} color={'black'} />
            </View>
          </Animatable.View>
          <Animatable.View
            animation="slideInLeft"
            style={{flexDirection: 'row'}}>
            <View style={styles.input}>
              <TextInput
                placeholder="Password"
                style={styles.Email}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.icon}>
              <Icon1 name="eye" size={20} color={'black'} />
            </View>
          </Animatable.View>
          <View style={styles.forgot}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Forgot');
              }}>
              <Text style={styles.txtforgot}>I forgot my Password</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Login}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.replace('Tabbottom');
              }}>
              <Text style={styles.txtLogin}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.or}>
            <Text style={{color: '#60226e'}}>________Or________</Text>
          </View>
          <View style={styles.New}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Newaccount');
              }}>
              <Text style={styles.TxtNew}>Create New Account</Text>
            </TouchableOpacity>
          </View>
          <View style={{top: 110}}>
            <TouchableOpacity onPress={() => this.RBSheet.open()}>
              <Text style={{color: '#60226e', fontWeight: 'bold'}}>
                Terms & Polices
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={300}
          openDuration={250}
          customStyles={{
            container: {
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}>
          <Terms />
        </RBSheet>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'DancingScript-VariableFont_wght',
    color: '#60226e',
    bottom: 20,
  },
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'lightgrey',
    paddingHorizontal: 4,
    width: 340,
    left: 10,
    marginVertical: 5,
    elevation: 4,
    borderRadius: 10,
  },
  Email: {
    width: 280,
  },
  icon: {
    right: 40,
    height: 20,
    top: 16,
  },
  forgot: {
    top: 10,
  },
  txtforgot: {
    fontSize: 15,
    color: '#60226e',
  },
  Login: {
    top: 25,
  },
  txtLogin: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#60226e',
    width: 300,
    paddingVertical: 15,
    borderRadius: 10,
  },
  or: {
    top: 45,
  },
  New: {
    top: 80,
  },
  TxtNew: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#60226e',
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 40,
  },
});
