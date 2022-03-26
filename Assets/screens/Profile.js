import {Text, View, Image} from 'react-native';
import React, {Component} from 'react';
import Profile from './Assets/screens/Profile';
import ImagePicker from 'react-native-image-crop-picker';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }
  Update = () => {
    ImagePicker.openPicker({
      cropping: true,
    }).then(image => {
      console.log(image);
      this.setState({
        data: image.path,
      });
    });
  };
  render() {
    return (
      <View>
        <Text onPress={this.Update}>App</Text>
        <Image
          source={{uri: this.state.data}}
          style={{height: 100, width: 200}}
        />
      </View>
    );
  }
}
