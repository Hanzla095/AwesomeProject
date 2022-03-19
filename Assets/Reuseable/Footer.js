import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import RBSheet from 'react-native-raw-bottom-sheet';
import Online from '../screens/Onlineshop';
export default class Footer extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.Maincontainer}>
          <View>
            <Icon name="home" size={26} color="white" />
          </View>
          <View>
            <TouchableOpacity onPress={() => this.RBSheet.open()}>
              <Icon1 name="select-arrows" size={26} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <Icon2 name="setting" size={26} color="white" />
          </View>
        </View>
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={300}
          openDuration={250}
          animationType="slide"
          customStyles={{
            container: {
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}>
          <Online />
        </RBSheet>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Maincontainer: {
    backgroundColor: 'black',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2,
  },
});
