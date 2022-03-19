import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/Entypo';

export default class App extends Component {
  render() {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.insta}>Instagram</Text>
          <Icon1
            style={{left: 200}}
            name="sc-telegram"
            size={40}
            color="black"
          />
        </View>
        <ScrollView>
          <ImageBackground
            style={{height: 400, width: 400, top: 50, alignContent: 'center'}}
            source={require('./Assets/images/imf/11.jpg')}>
            <View>
              <Image
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 40,
                  borderWidth: 2,
                  borderColor: 'white',
                }}
                source={require('./Assets/images/imf/11.jpg')}
              />
            </View>
          </ImageBackground>
          <View
            style={{
              top: 52,
              left: 4,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              elevation: 1,
              backgroundColor: 'white',
            }}>
            <Icon style={{right: 60}} name="heart" size={30} />
            <Icon1 style={{right: 10}} name="comment" size={30} />
            <Icon2 style={{left: 40}} name="share" size={30} />
          </View>
          <ImageBackground
            style={{height: 400, width: 400, top: 50, alignContent: 'center'}}
            source={require('./Assets/images/imf/12.jpg')}>
            <View>
              <Image
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 40,
                  borderWidth: 2,
                  borderColor: 'white',
                }}
                source={require('./Assets/images/imf/12.jpg')}
              />
            </View>
          </ImageBackground>
          <View
            style={{
              top: 52,
              left: 4,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              elevation: 1,
              backgroundColor: 'white',
            }}>
            <Icon style={{right: 60}} name="heart" size={30} />
            <Icon1 style={{right: 10}} name="comment" size={30} />
            <Icon2 style={{left: 40}} name="share" size={30} />
          </View>
          <ImageBackground
            style={{height: 400, width: 400, top: 50, alignContent: 'center'}}
            source={require('./Assets/images/imf/13.jpg')}>
            <View>
              <Image
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 40,
                  borderWidth: 2,
                  borderColor: 'white',
                }}
                source={require('./Assets/images/imf/13.jpg')}
              />
            </View>
          </ImageBackground>
          <View
            style={{
              top: 52,
              left: 4,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              elevation: 1,
              backgroundColor: 'white',
            }}>
            <Icon style={{right: 60}} name="heart" size={30} />
            <Icon1 style={{right: 10}} name="comment" size={30} />
            <Icon2 style={{left: 40}} name="share" size={30} />
          </View>
          <ImageBackground
            style={{height: 400, width: 400, top: 50, alignContent: 'center'}}
            source={require('./Assets/images/imf/14.jpg')}>
            <View>
              <Image
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 40,
                  borderWidth: 2,
                  borderColor: 'white',
                }}
                source={require('./Assets/images/imf/14.jpg')}
              />
            </View>
          </ImageBackground>
          <View
            style={{
              top: 52,
              left: 4,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              elevation: 1,
              backgroundColor: 'white',
            }}>
            <Icon style={{right: 60}} name="heart" size={30} />
            <Icon1 style={{right: 10}} name="comment" size={30} />
            <Icon2 style={{left: 40}} name="share" size={30} />
          </View>
          <ImageBackground
            style={{height: 400, width: 400, top: 50, alignContent: 'center'}}
            source={require('./Assets/images/imf/15.jpg')}>
            <View>
              <Image
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 40,
                  borderWidth: 2,
                  borderColor: 'white',
                }}
                source={require('./Assets/images/imf/15.jpg')}
              />
            </View>
          </ImageBackground>
          <View
            style={{
              top: 52,
              left: 4,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              elevation: 1,
              backgroundColor: 'white',
            }}>
            <Icon style={{right: 60}} name="heart" size={30} />
            <Icon1 style={{right: 10}} name="comment" size={30} />
            <Icon2 style={{left: 40}} name="share" size={30} />
          </View>
          <ImageBackground
            style={{height: 400, width: 400, top: 50, alignContent: 'center'}}
            source={require('./Assets/images/imf/gg.jpeg')}>
            <View>
              <Image
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 40,
                  borderWidth: 2,
                  borderColor: 'white',
                }}
                source={require('./Assets/images/imf/gg.jpeg')}
              />
            </View>
          </ImageBackground>
          <View
            style={{
              top: 52,
              left: 4,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              elevation: 1,
              backgroundColor: 'white',
            }}>
            <Icon style={{right: 60}} name="heart" size={30} />
            <Icon1 style={{right: 10}} name="comment" size={30} />
            <Icon2 style={{left: 40}} name="share" size={30} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  insta: {
    fontSize: 30,
    top: 15,
    left: 10,
    fontFamily: 'DancingScript-VariableFont_wght',
    paddingVertical: 20,
  },
  like: {},
});
