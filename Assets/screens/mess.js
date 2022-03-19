import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

export default class App extends Component {
  render() {
    return (
      <View>
        <ImageBackground
          style={{height: 600, width: 600}}
          source={require('./Assets/images/imf/bb.jpeg')}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#db374a',
              paddingVertical: 30,
            }}>
            <Icon style={styles.logo} name="arrowleft" size={25} />
            <Text style={styles.txt}>LoginScreen</Text>
          </View>
        </ImageBackground>

        <View style={{backgroundColor: 'pink'}}>
          <View>
            <Text style={styles.lg}> Login</Text>
          </View>
          <View>
            <Text style={styles.ma}> Email</Text>
          </View>
          <View>
            <TextInput style={styles.input} />
          </View>
          <View>
            <Text style={styles.pa}> Passward</Text>
          </View>
          <View>
            <TextInput style={styles.input1} />
          </View>
          <View>
            <Text style={styles.in}>Login</Text>
          </View>
          <View>
            <Text style={styles.dd}>Don't have an account? Register Now</Text>
          </View>
          <View>
            <Text style={styles.pp}>Forgot Password? </Text>
          </View>
        </View>
        <Image
          style={{
            bottom: 650,
            height: 70,
            width: 70,
            borderRadius: 35,
            left: 140,
          }}
          source={require('./Assets/images/imf/mess.jpeg')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    left: 5,
    color: 'white',
  },
  txt: {
    marginHorizontal: 50,
    fontSize: 18,
    color: 'white',
  },
  lg: {
    bottom: 350,
    fontSize: 25,
    marginHorizontal: 50,
    borderBottomWidth: 1,
    color: 'black',
    borderColor: 'black',
    fontWeight: 'bold',
  },
  ma: {
    bottom: 340,
    marginHorizontal: 50,
    fontSize: 15,
    color: 'black',
  },
  input: {
    bottom: 335,
    marginHorizontal: 50,
    backgroundColor: 'lightgrey',
    paddingVertical: 5,
    borderRadius: 7,
  },
  pa: {
    bottom: 330,
    marginHorizontal: 50,
    fontSize: 15,
    color: 'black',
  },
  input1: {
    bottom: 325,
    marginHorizontal: 50,
    backgroundColor: 'lightgrey',
    paddingVertical: 5,
    borderRadius: 7,
  },
  in: {
    fontSize: 20,
    bottom: 310,
    backgroundColor: '#db374a',
    marginHorizontal: 150,
    width: 250,
    right: 95,
    textAlign: 'center',
    paddingVertical: 6,
    borderRadius: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  dd: {
    bottom: 290,
    textAlign: 'center',
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
  },
  pp: {
    bottom: 285,
    textAlign: 'center',
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
  },
});
