import {Text, View} from 'react-native';
import React, {Component} from 'react';
import Video from 'react-native-video';

export default class VideoScreen extends Component {
  render() {
    return (
      <View>
        <Video source={require('../../Assets/abc.mp4')} />
      </View>
    );
  }
}
