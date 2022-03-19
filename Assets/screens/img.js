import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'orange'}}>
        <View style={{marginHorizontal: 110, marginTop: 50}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
            My Store
          </Text>
          <View>
            <Image
              source={require('./images/1.jpg')}
              style={styles.img}></Image>

            <Image
              source={require('./images/2.jpg')}
              style={styles.img}></Image>

            <Image
              source={require('./images/3.jpg')}
              style={styles.img}></Image>
            <TouchableOpacity>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    marginTop: 30,
                    marginLeft: 2,
                    fontWeight: 'bold',
                    color: 'white',
                    backgroundColor: 'purple',
                    padding: 10,
                    textAlign: 'center',
                    borderRadius: 20,
                  }}>
                  Order Now
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    height: 150,
    width: 150,
    marginHorizontal: -10,
    marginTop: 20,
    borderRadius: 50,
  },
  img1: {
    height: 140,
    width: 140,
    marginLeft: 80,
    marginBottom: 500,
  },
});
