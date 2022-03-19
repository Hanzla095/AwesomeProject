import {Text, View, Image, StyleSheet} from 'react-native';
import React, {Component} from 'react';

export default class Notify extends Component {
  render() {
    return (
      <View>
        <View style={styles.main}>
          <Image
            source={require('../images/imf/11.jpg')}
            style={{height: 30, width: 30, borderRadius: 20}}
          />
          <Text style={{left: 10, top: 5}}>Rizwan commented 'Beautiful'</Text>
        </View>
        <View style={styles.main}>
          <Image
            source={require('../images/imf/12.jpg')}
            style={{height: 30, width: 30, borderRadius: 20}}
          />
          <Text style={{left: 10, top: 5}}>Ali commented 'Nice'</Text>
        </View>
        <View style={styles.main}>
          <Image
            source={require('../images/imf/13.jpg')}
            style={{height: 30, width: 30, borderRadius: 20}}
          />
          <Text style={{left: 10, top: 5}}>Hamza commented 'Good'</Text>
        </View>
        <View style={styles.main}>
          <Image
            source={require('../images/imf/14.jpg')}
            style={{height: 30, width: 30, borderRadius: 20}}
          />
          <Text style={{left: 10, top: 5}}>Hassan commented 'Awesome'</Text>
        </View>
        <View style={styles.main}>
          <Image
            source={require('../images/imf/15.jpg')}
            style={{height: 30, width: 30, borderRadius: 20}}
          />
          <Text style={{left: 10, top: 5}}>Rizwan commented 'Beautiful'</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    marginVertical: 2,
    elevation: 2,
  },
});
