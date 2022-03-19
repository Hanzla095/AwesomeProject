import {Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Counter: 0,
    };
  }
  Counter_Add = () => {
    this.setState({
      Counter: this.state.Counter + 1,
    });
  };
  Counter_Sub = () => {
    this.setState({
      Counter: this.state.Counter - 1,
    });
  };
  Counter_Reset = () => {
    this.setState({
      Counter: 0,
    });
  };
  render() {
    return (
      <View>
        <View style={{flexDirection: 'row', marginHorizontal: 140, top: 200}}>
          <Text>Counter</Text>
          <Text style={{color: 'red', left: 20}}>{this.state.Counter}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.Counter_Add}>
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={this.Counter_Sub}>
            <Text>Sub</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={this.Counter_Reset}>
            <Text>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
