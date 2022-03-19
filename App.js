import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import New from './Assets/screens/NewPassword';
import Forgot from './Assets/screens/Forgot';
import Main from './Assets/screens/Mainscreen';
import Terms from './Assets/screens/Terms';
import Newaccount from './Assets/screens/Newaccount';
import Home from './Assets/screens/Home';
import Otp from './Assets/screens/Otp';
import Settings from './Assets/screens/Settings';
import Splash from './Assets/screens/Splash';
import FlatlistFunction from './Assets/screens/FlatlistFunction';
import Tabbottom from './Assets/screens/Tabbottom';
import OnboardScreen from './Assets/screens/OnboardScreen';
import VideoScreen from './Assets/screens/VideoScreen';

const Stack = createStackNavigator();

export default class Navigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="VideoScreen" component={VideoScreen} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="OnboardScreen" component={OnboardScreen} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Forgot" component={Forgot} />
          <Stack.Screen name="New" component={New} />
          <Stack.Screen name="Terms" component={Terms} />
          <Stack.Screen name="Newaccount" component={Newaccount} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Otp" component={Otp} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Flat" component={FlatlistFunction} />
          <Stack.Screen name="Tabbottom" component={Tabbottom} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
