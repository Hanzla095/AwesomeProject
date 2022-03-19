import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import createIconSet from 'react-native-vector-icons/dist/lib/create-icon-set';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View>
          <Text
            style={{
              fontSize: 30,
              marginTop: 10,
              fontWeight: 'bold',
              marginLeft: 30,
            }}>
            Instagram
          </Text>
        </View>

        <View style={styles.bar}>
          <View>
            <Text style={{fontSize: 25, fontWeight: 'bold', left: 10}}>
              Stories
            </Text>
          </View>
          <View>
            <Text style={styles.seetext}>see all</Text>
          </View>
        </View>

        <View>
          <ScrollView horizontal={true}>
            <Image
              source={require('./images/imf/11.jpg')}
              style={styles.img}></Image>
            <Image
              source={require('./images/imf/12.jpg')}
              style={styles.img}></Image>
            <Image
              source={require('./images/imf/13.jpg')}
              style={styles.img}></Image>
            <Image
              source={require('./images/imf/14.jpg')}
              style={styles.img}></Image>
            <Image
              source={require('./images/imf/15.jpg')}
              style={styles.img}></Image>
          </ScrollView>
        </View>

        <View>
          <ScrollView>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Image
                  source={require('./images/imf/bd.jpeg')}
                  style={styles.img2}></Image>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 17,
                    marginLeft: 20,
                    top: 20,
                    fontWeight: 'bold',
                    textDecorationLine: 'underline',
                  }}>
                  Rizwan siddique
                </Text>
              </View>
            </View>
            <View style={{alignItems: 'center', marginTop: 18}}>
              <Image
                source={require('./images/imf/bd.jpeg')}
                style={styles.img1}></Image>
              <View
                style={{
                  flexDirection: 'row',
                  elevation: 15,
                  backgroundColor: 'white',
                  marginTop: 10,
                  width: '100%',
                  justifyContent: 'space-between',
                  paddingVertical: 12,
                  borderRadius: 15,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-evenly',
                  }}>
                  <View>
                    <Text>like</Text>
                  </View>
                  <View>
                    <Text>comment</Text>
                  </View>
                  <View>
                    <Text>share</Text>
                  </View>
                </View>
              </View>

              <View style={{flexDirection: 'row', right: 90}}>
                <View>
                  <Image
                    source={require('./images/imf/sc.jpeg')}
                    style={styles.img2}></Image>
                </View>

                <View>
                  <Text
                    style={{
                      fontSize: 17,
                      marginLeft: 20,
                      top: 20,
                      fontWeight: 'bold',
                      textDecorationLine: 'underline',
                    }}>
                    Shehroz Khalid
                  </Text>
                </View>
              </View>
            </View>
            <View style={{alignItems: 'center', marginTop: 30}}>
              <Image
                source={require('./images/imf/sc.jpeg')}
                style={styles.img1}></Image>
            </View>
            <View style={{flexDirection: 'row', right: 2}}>
              <View style={{marginTop: 50}}>
                <Image
                  source={require('./images/imf/jm.jpeg')}
                  style={styles.img2}></Image>
              </View>
              <View style={{}}>
                <View>
                  <Text style={{left: 20}}>like</Text>
                </View>
                <View>
                  <Text>comment</Text>
                </View>
                <View>
                  <Text style={{right: 20}}>share</Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 17,
                    marginLeft: 20,
                    top: 20,
                    fontWeight: 'bold',
                    textDecorationLine: 'underline',
                  }}>
                  JA'm Hanzla
                </Text>
              </View>
            </View>
            <View style={{alignItems: 'center', marginTop: 30}}>
              <Image
                source={require('./images/imf/jm.jpeg')}
                style={styles.img1}></Image>
            </View>
            <View style={{alignItems: 'center', marginTop: 30}}>
              <Image
                source={require('./images/imf/14.jpg')}
                style={styles.img1}></Image>
            </View>
            <View style={{alignItems: 'center', marginTop: 30}}>
              <Image
                source={require('./images/imf/15.jpg')}
                style={styles.img1}></Image>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    height: 100,
    width: 100,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: 'red',
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    elevation: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  seetext: {
    marginTop: 9,
    textDecorationLine: 'underline',
    color: 'dodgerblue',
    right: 10,
  },
  img1: {
    height: 350,
    width: 350,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
  },
  img2: {
    height: 50,
    width: 50,
    borderRadius: 130,
    top: 10,
    left: 6,
    borderWidth: 2,
    borderColor: 'orange',
  },
  like: {
    elevation: 10,
    backgroundColor: 'white',
  },
});
