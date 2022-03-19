import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FlatListFunction from './FlatlistFunction';
import Search from './Search';
import Notify from './Notify';
import Logout from './Logout';
import Icon from 'react-native-vector-icons/AntDesign';
const Tab = createBottomTabNavigator();
export default class Tabbottom extends Component {
  render() {
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="home"
          component={FlatListFunction}
          options={{
            tabBarIcon: () => (
              <Icon size={20} name="home" color={'TintColor'} />
            ),
            tabBarShowLabel: false,
            activeTintColor: 'red',
            inactiveTintColor: 'white',
          }}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={{
            tabBarIcon: () => (
              <Icon size={20} name="search1" color={'TintColor'} />
            ),
            tabBarShowLabel: false,
            activeTintColor: 'red',
            inactiveTintColor: 'white',
          }}
        />
        <Tab.Screen
          name="Notify"
          component={Notify}
          options={{
            tabBarIcon: () => (
              <Icon size={20} name="heart" color={'tabBarActiveTintColor'} />
            ),
            tabBarShowLabel: false,
            tabBarActiveTintColor: 'red',
            inactiveTintColor: 'white',
          }}
        />
        <Tab.Screen
          name="Logout"
          component={Logout}
          options={{
            tabBarIcon: () => (
              <Icon size={20} name="logout" color={'TintColor'} />
            ),
            tabBarShowLabel: false,
            activeTintColor: 'red',
            inactiveTintColor: 'white',
          }}
        />
      </Tab.Navigator>
    );
  }
}
