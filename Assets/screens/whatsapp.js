import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.wht}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'white',
              right: 20,
              bottom: 25,
            }}>
            Whatsapp
          </Text>

          <View>
            <Icon
              name="search1"
              color="white"
              size={25}
              style={{marginLeft: 140, bottom: 15}}
            />
            <Icon1
              name="dots-three-vertical"
              color="white"
              size={20}
              style={{marginLeft: 185, bottom: 40}}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            bottom: 30,
          }}>
          <Icon2
            name="camera-outline"
            color="white"
            size={25}
            style={{marginRight: 120}}
          />

          <Text
            style={{
              fontSize: 17,
              right: 110,
              fontWeight: '500',
              color: 'white',
            }}>
            CHATS
          </Text>
          <Text
            style={{
              fontSize: 17,
              right: 70,
              fontWeight: '500',
              color: 'white',
            }}>
            STATUS
          </Text>
          <Text
            style={{
              fontSize: 17,
              right: 20,
              fontWeight: '500',
              color: 'white',
            }}>
            CALLS
          </Text>
        </View>
        <View>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                elevation: 2,
              }}>
              <Image
                source={require('../images/imf/11.jpg')}
                style={{
                  height: 55,
                  width: 55,
                  borderRadius: 55,
                  marginLeft: 5,
                  marginTop: 0,
                  left: 10,
                }}></Image>
              <Text style={styles.name}>Jam Hanzla</Text>
              <View style={styles.mess}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 35, right: 60}}>Mere beta</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/12.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Fees!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/13.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>sir</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/14.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>wo baba ne</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/15.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>bas</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/16.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>bas</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/17.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>koi baat nhi</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/18.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/19.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/20.jpeg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/21.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/22.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/23.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/24.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/12.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/12.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/12.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/12.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/12.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/12.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/12.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/12.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/12.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/12.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/12.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/12.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/12.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/12.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/12.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/12.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/12.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/12.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/12.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/12.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
            <View style={{flexDirection: 'row', elevation: 2}}>
              <Image
                source={require('../images/imf/12.jpg')}
                style={styles.img}></Image>
              <Text style={styles.nm}> Rizwan siddique</Text>
              <View style={styles.mess1}>
                <Icon name="message1" />
              </View>
              <Text style={{marginTop: 60, right: 100}}>Hi Hanzla!</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wht: {
    marginTop: 0,
    left: 0,
    backgroundColor: 'teal',
    padding: 40,
    flexDirection: 'row',
  },
  img: {
    height: 55,
    width: 55,
    borderRadius: 55,
    marginLeft: 5,
    marginTop: 25,
    left: 10,
  },
  mess: {
    right: 65,
    top: 40,
  },
  name: {
    fontSize: 18,
    left: 30,
    top: 5,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  nm: {
    fontSize: 18,
    fontWeight: 'bold',
    left: 25,
    top: 30,
    textDecorationLine: 'underline',
  },
  mess1: {
    top: 65,
    right: 105,
  },
});
