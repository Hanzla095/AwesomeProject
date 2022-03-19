import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
export default class App extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity>
          <View style={styles.logo}>
            <Icon name="arrowleft" size={25} color="purple" />
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.txt}>Congratulations!</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingHorizontal: 10,
          }}>
          <Text style={{right: 10, fontSize: 17}}>We are</Text>
          <Text style={{color: 'purple', right: 5, fontSize: 17}}>Glad</Text>
          <Text style={{fontSize: 17}}>to find you near us !</Text>
        </View>
        <View style={styles.inputcontainer}>
          <View style={styles.input}>
            <TextInput placeholder="Business man colony Rahim Yar Khan" />
            <Icon1
              name="map-marker-alt"
              size={15}
              color="purple"
              style={{top: 16, left: 10}}
            />
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.txt1}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
          </View>
        </TouchableOpacity>
        <View style={{alignItems: 'center', top: 10}}>
          <Text>-----Or-----</Text>
          <Text>Don't have an account?</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Text style={{color: 'purple', right: 5}}>Register</Text>
            </TouchableOpacity>
            <Text>Now.</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    top: 10,
    left: 5,
  },
  txt: {
    marginTop: 150,
    marginLeft: 70,
    fontFamily: 'DancingScript-VariableFont_wght',
    color: 'purple',
    fontSize: 40,
  },
  input: {
    backgroundColor: 'white',
    elevation: 1,
    paddingHorizontal: 40,
    borderRadius: 5,
    top: 20,
    flexDirection: 'row',
  },
  inputcontainer: {
    alignItems: 'center',
  },
  txt1: {
    alignItems: 'center',
    backgroundColor: 'purple',
    marginTop: 50,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 10,
  },
});
