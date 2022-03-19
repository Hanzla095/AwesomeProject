import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import New from './NewPassword';
import Forgot from './Forgot';
import Main from './Mainscreen';
import Terms from './Terms';
import Newaccount from './Newaccount';
import Home from './Home';
import Otp from './Otp';
import Settings from './Settings';

const Stack = createStackNavigator();

export default class Navigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Forgot" component={Forgot} />
          <Stack.Screen name="New" component={New} />
          <Stack.Screen name="Terms" component={Terms} />
          <Stack.Screen name="Newaccount" component={Newaccount} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Otp" component={Otp} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
