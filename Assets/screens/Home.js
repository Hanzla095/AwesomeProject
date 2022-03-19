import {Text, View, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 30,
              top: 12,
              color: '#60226e',
              fontFamily: 'DancingScript-VariableFont_wght',
              width: 200,
            }}>
            Welcome to DevOps !
          </Text>

          <Icon name="person-circle-sharp" size={50} color={'#60226e'} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.maincontainer}>
            <Image
              source={require('../images/app.png')}
              style={{height: 100, width: 150, top: 10}}
            />
            <Text style={{top: 17, fontWeight: 'bold', color: '#60226e'}}>
              App Development
            </Text>
          </View>
          <View style={styles.maincontainer}>
            <Image
              source={require('../images/web.png')}
              style={{height: 100, width: 150, top: 10}}
            />
            <Text style={{top: 17, fontWeight: 'bold', color: '#60226e'}}>
              Web Development
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.maincontainer}>
            <Image
              source={require('../images/Market.png')}
              style={{height: 100, width: 150, top: 10}}
            />
            <Text style={{top: 17, fontWeight: 'bold', color: '#60226e'}}>
              Marketing
            </Text>
          </View>
          <View style={styles.maincontainer}>
            <Image
              source={require('../images/graphics.png')}
              style={{height: 100, width: 150, top: 10}}
            />
            <Text style={{top: 17, fontWeight: 'bold', color: '#60226e'}}>
              Graphics Designing
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.maincontainer}>
            <Image
              source={require('../images/business.png')}
              style={{height: 100, width: 150, top: 10}}
            />
            <Text style={{top: 17, fontWeight: 'bold', color: '#60226e'}}>
              Business Management
            </Text>
          </View>
          <View style={styles.maincontainer}>
            <Image
              source={require('../images/help.png')}
              style={{height: 100, width: 150, top: 10}}
            />
            <Text style={{top: 17, fontWeight: 'bold', color: '#60226e'}}>
              Need Help ?
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            top: 50,
            marginHorizontal: 15,
          }}>
          <TouchableOpacity
            onPress={() => {
              alert('You are already on Home page');
            }}>
            <Icon1 name="home" size={35} color={'#60226e'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('New');
            }}>
            <Icon name="help-buoy" size={35} color={'#60226e'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Settings');
            }}>
            <Icon name="settings" size={35} color={'#60226e'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Main');
            }}>
            <Icon name="ios-exit" size={35} color={'#60226e'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    height: 150,
    width: 170,
    borderBottomLeftRadius: 35,
    borderTopRightRadius: 35,
    alignItems: 'center',
    elevation: 10,
    marginHorizontal: 5,
    marginVertical: 15,
  },
});
