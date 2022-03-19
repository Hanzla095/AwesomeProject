import {Text, View, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import React, {Component} from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Modal: false,
    };
  }

  Modal_On = () => {
    this.setstate({
      Modal: true,
    });
  };
  Modal_close = () => {
    this.setstate({
      Modal: false,
    });
  };

  render() {
    return (
      <View>
        <View style={styles.nxt}>
          <Text style={{fontSize: 25}}>Click on NEXT to go to next</Text>
          <Modal visible={this.state.Modal}></Modal>
        </View>
        <Modal visible={this.state.Modal}>
          <TouchableOpacity onPress={this.Modal_On}>
            <View style={styles.nnxt}>
              <Text style={{fontSize: 40}}>NEXT</Text>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nxt: {
    backgroundColor: 'lightblue',
    top: 150,
    marginHorizontal: 20,
  },
  nnxt: {
    backgroundColor: 'pink',
    top: 400,
    marginHorizontal: 120,
    textAlign: 'center',
  },
});
