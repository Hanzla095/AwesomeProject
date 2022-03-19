import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import CountryPicker from 'rn-country-picker';

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 40,
        }}>
        <View>
          <Text style={styles.txt}>Lets Get Started !</Text>
        </View>
        <View style={styles.create}>
          <Text>Create an account to DevOps to get all the features</Text>
        </View>
        <View style={styles.Icon}>
          <Icon name="person" size={20} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Full Name" />
        </View>
        <View style={styles.Icon}>
          <Icon name="mail" size={20} style={styles.icon1} />
          <TextInput style={styles.input} placeholder="Email" />
        </View>
        <View style={styles.Icon}>
          <Icon name="phone-portrait-sharp" size={20} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Phone" />
        </View>
        <View style={styles.Icon}>
          <Icon name="lock-closed-outline" size={20} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.Icon}>
          <Icon name="lock-closed-outline" size={20} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
        </View>
        <View style={{top: 25}}>
          <CountryPicker hideCountryFlag={false} />
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              alert('Congratulations! Account successfully created');
            }}>
            <Text style={styles.button}>Create</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', top: 70}}>
          <Text style={{color: 'black'}}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Main');
            }}>
            <Text style={{color: '#60226e', fontWeight: 'bold'}}>
              Login here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
  },
  create: {
    top: 5,
  },
  input: {
    width: 300,
    left: 20,
  },
  icon: {
    top: 10,
    left: 10,
  },
  Icon: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 340,
    borderRadius: 25,
    elevation: 2,
    marginVertical: 10,
    top: 20,
  },
  button: {
    backgroundColor: '#60226e',
    top: 40,
    padding: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon1: {
    top: 12,
    left: 10,
  },
});
