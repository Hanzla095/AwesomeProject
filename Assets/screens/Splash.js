import {Text, View} from 'react-native';
import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import LottieView from 'lottie-react-native';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.replace('OnboardScreen');
    }, 4000);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#60226e',
        }}>
        <View style={{height: 250, width: 300}}>
          <LottieView autoPlay source={require('../296-react-logo.json')} />
        </View>
        <View>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              fontFamily: 'DancingScript-VariableFont_wght',
            }}>
            DevOps
          </Text>
        </View>
      </View>
    );
  }
}
808;
