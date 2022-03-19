import {Text, View, TextInput, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

export default class Settings extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 35, fontWeight: 'bold', bottom: 50}}>
          Settings
        </Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            paddingHorizontal: 80,
            borderRadius: 10,
            elevation: 2,
          }}>
          <Icon name="search" size={20} style={{right: 50, top: 15}} />
          <TextInput placeholder="Search for a setting" style={{right: 30}} />
        </View>
        <View style={styles.Main}>
          <Icon name="person" size={20} style={{left: 10, top: 5}} />
          <Text style={{fontSize: 18, top: 3, right: 75}}>Account</Text>
          <Icon name="chevron-forward" size={25} style={{top: 5}} />
        </View>
        <View style={styles.Main}>
          <Icon name="notifications" size={20} style={{left: 10, top: 5}} />
          <Text style={{fontSize: 18, top: 3, right: 58}}>Notifications</Text>
          <Icon name="chevron-forward" size={25} style={{top: 5}} />
        </View>
        <View style={styles.Main}>
          <Icon name="eye" size={20} style={{left: 10, top: 5}} />
          <Text style={{fontSize: 18, top: 3, right: 60}}>Appearance</Text>
          <Icon name="chevron-forward" size={25} style={{top: 5}} />
        </View>
        <View style={styles.Main}>
          <Icon1 name="privacy-tip" size={20} style={{left: 10, top: 5}} />
          <Text style={{fontSize: 18, top: 3, right: 78}}>Privacy</Text>
          <Icon name="chevron-forward" size={25} style={{top: 5}} />
        </View>
        <View style={styles.Main}>
          <Icon name="lock-closed" size={20} style={{left: 10, top: 5}} />
          <Text style={{fontSize: 18, top: 3, right: 75}}>Security</Text>
          <Icon name="chevron-forward" size={25} style={{top: 5}} />
        </View>
        <View style={styles.Main}>
          <Icon name="headset" size={20} style={{left: 10, top: 5}} />
          <Text style={{fontSize: 18, top: 3, right: 37}}>
            Help and Support
          </Text>
          <Icon name="chevron-forward" size={25} style={{top: 5}} />
        </View>
        <View style={styles.Main}>
          <Icon1 name="question-answer" size={20} style={{left: 10, top: 5}} />
          <Text style={{fontSize: 18, top: 3, right: 85}}>About</Text>
          <Icon name="chevron-forward" size={25} style={{top: 5}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Main: {
    flexDirection: 'row',
    width: 300,
    height: 35,
    justifyContent: 'space-between',
    marginVertical: 10,
    elevation: 2,
    top: 20,
  },
});
