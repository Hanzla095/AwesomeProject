import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {Component} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/Ionicons';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      data1: '',
      text: 'Add cover Photo',
      icon: 'camera',
      icon1: '',
    };
  }
  Update = () => {
    ImagePicker.openPicker({
      cropping: true,
    }).then(image => {
      console.log(image);
      this.setState({
        data: image.path,
        text: '',
        icon: '',
        icon1: 'camera',
      });
    });
  };

  Update1 = () => {
    ImagePicker.openPicker({
      cropping: true,
    }).then(image => {
      console.log(image);
      this.setState({
        data1: image.path,
        icon: '',
      });
    });
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <ImageBackground
          source={{uri: this.state.data}}
          style={styles.imgbackground}>
          <View style={styles.container}>
            <View style={styles.icontext}>
              <Icon name={this.state.icon} size={20} />
              <TouchableOpacity onPress={this.Update}>
                <Text style={{left: 10, fontSize: 17}}>{this.state.text}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.icon1}>
            <TouchableOpacity onPress={this.Update}>
              <Icon style={{left: 10}} name={this.state.icon1} size={25} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View></View>

        <Image source={{uri: this.state.data1}} style={styles.image} />
        <View>
          <View style={styles.icon2}>
            <TouchableOpacity onPress={this.Update1}>
              <Icon name="camera" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imgbackground: {
    height: 210,
    width: 340,
    top: 10,
    backgroundColor: 'lightgrey',
  },
  container: {
    height: 210,
    width: 340,
    top: 10,
  },
  icontext: {
    flexDirection: 'row',
    marginHorizontal: 90,
    marginVertical: 70,
    width: 180,
  },
  icon2: {
    backgroundColor: 'lightgrey',
    bottom: 100,
    left: 40,
    padding: 6,
    borderRadius: 20,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 120,
    bottom: 50,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  icon1: {
    backgroundColor: 'lightgrey',
    width: 45,
    height: 45,
    borderRadius: 25,
    left: 280,
    bottom: 50,
    justifyContent: 'center',
  },
});
