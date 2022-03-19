import {Text, View, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import React, {Component} from 'react';
import Kk from './Assets/screens/loggin';
import Icon from 'react-native-vector-icons/AntDesign';
import {Overlay} from 'modal-react-native-web';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Modal: false,
    };
  }
  Open = () => {
    this.setState({
      Modal: true,
    });
  };
  Close = () => {
    this.setState({
      Modal: false,
    });
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            top: 300,
            marginHorizontal: 20,
            elevation: 5,
            backgroundColor: 'white',
          }}>
          <Text
            style={{
              fontSize: 25,
              color: 'red',
              borderWidth: 1,
              textAlign: 'center',
            }}>
            Click on NEXT
          </Text>
          <Modal visible={this.state.Modal}></Modal>
        </View>

        <View
          style={{
            marginHorizontal: 100,
            paddingVertical: 10,
            borderRadius: 100,
            top: 350,
          }}>
          <TouchableOpacity onPress={this.Open}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                backgroundColor: 'red',
                paddingVertical: 10,
                borderRadius: 20,
              }}>
              NEXT
            </Text>
          </TouchableOpacity>
        </View>

        <Modal visible={this.state.Modal} animationType="slide">
          <TouchableOpacity onPress={this.Close}>
            <Kk />
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}
