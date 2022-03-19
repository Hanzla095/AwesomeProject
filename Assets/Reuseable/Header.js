import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';

export default class Header extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.Maincontainer}>
          <View>
            <Icon1 name="arrow-back-outline" size={30} color="white" />
          </View>
          <View>
            <Text style={styles.txt}>Flatlist Design</Text>
          </View>
          <View>
            <Icon name="search1" size={30} color="white" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Maincontainer: {
    backgroundColor: 'black',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2,
  },
  txt: {
    fontSize: 22,
    color: 'white',
  },
});
