import {Text, View, Image, Button} from 'react-native';
import React, {Component} from 'react';
import Onboarding from 'react-native-onboarding-swiper';

export default class OnboardScreen extends Component {
  render() {
    return (
      <Onboarding
        pages={[
          {
            backgroundColor: '#47ede8',
            image: (
              <Image
                style={{height: 300, width: 300, borderRadius: 1000}}
                source={require('../images/ffg.png')}
              />
            ),
            title: 'Fast Delievery',
            subtitle: '',
          },
          {
            backgroundColor: '#fcc428',
            image: (
              <Image
                style={{height: 300, width: 300, borderRadius: 1000}}
                source={require('../images/ff.jpg')}
              />
            ),
            title: 'Worlds Best Chefs',
            subtitle: '',
          },
          {
            backgroundColor: 'pink',
            image: (
              <Image
                style={{height: 300, width: 300, borderRadius: 1000}}
                source={require('../images/fff.png')}
              />
            ),
            title: 'Quick Service',
            subtitle: '',
          },
        ]}
        onSkip={() => {
          this.props.navigation.replace('Main');
        }}
        onDone={() => {
          this.props.navigation.replace('Main');
        }}
        titleStyles={{
          fontSize: 35,
          fontFamily: 'DancingScript-VariableFont_wght',
        }}
        containerStyles={{
          borderWidth: 5,
          borderColor: 'white',
          borderTopRightRadius: 250,
          borderBottomLeftRadius: 250,

          backgroundColor: 'white',
        }}
      />
    );
  }
}
