import {Text, View, Modal, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import Login from './Assets/screens/bd';
import Icon from 'react-native-vector-icons/AntDesign';

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
        <Text>This is Screen</Text>
        <Modal visible={this.state.Modal}></Modal>

        <TouchableOpacity onPress={this.Open}>
          <Text>This is Modal screen</Text>
        </TouchableOpacity>

        <Modal visible={this.state.Modal}>
          <TouchableOpacity onPress={this.Close}>
            <Login />
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}
