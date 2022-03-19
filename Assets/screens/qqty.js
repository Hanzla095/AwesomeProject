import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Counter: 0,
    };
  }
  Count_Add = () => {
    this.setState({
      Counter: this.state.Counter + 1,
    });
  };
  Count_Sub = () => {
    this.setState({
      Counter: this.state.Counter - 1,
    });
  };
  Count_Reset = () => {
    this.setState({
      Counter: 0,
    });
  };
  render() {
    return (
      <View>
        <View>
          <Image
            style={styles.img}
            source={require('./Assets/images/watch.jpg')}
          />
        </View>

        <Text style={styles.count}>{this.state.Counter}</Text>

        <TouchableOpacity onPress={this.Count_Add}>
          <Text style={styles.add}>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.Count_Sub}>
          <Text style={styles.Sub}>Sub</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.Count_Reset}>
          <Text style={styles.Reset}>reset</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    height: 250,
    width: 250,
    top: 100,
    marginHorizontal: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  count: {
    top: 140,
    left: 170,
    fontSize: 30,
  },
  add: {
    fontSize: 30,
    top: 130,
    backgroundColor: 'red',
    marginHorizontal: 140,
    textAlign: 'center',
    color: 'white',
    right: 130,
  },
  Sub: {
    fontSize: 30,
    top: 140,
    backgroundColor: 'red',
    marginHorizontal: 140,
    textAlign: 'center',
    color: 'white',
    right: 130,
  },
  Reset: {
    fontSize: 30,
    top: 150,
    backgroundColor: 'red',
    marginHorizontal: 140,
    textAlign: 'center',
    color: 'white',
    right: 130,
  },
});
