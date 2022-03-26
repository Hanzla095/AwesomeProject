import {Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import Icon5 from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';

export default class Sheet extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => {
            ImagePicker.openPicker({
              multiple: true,
            }).then(images => {
              console.log(images);
              this.setState(data);
            });
          }}>
          <View style={{flexDirection: 'row', padding: 10, right: 70}}>
            <View
              style={{
                backgroundColor: 'lightgrey',
                padding: 10,
                borderRadius: 30,
              }}>
              <Icon1 name="pluscircle" size={15} color={'black'} />
            </View>
            <View>
              <Text style={{fontSize: 20, left: 15, top: 5}}>Add to story</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            ImagePicker.openPicker({
              mediaType: 'video',
            }).then(video => {
              console.log(video);
              this.setState(data);
            });
          }}>
          <View style={{flexDirection: 'row', padding: 10, right: 70}}>
            <View
              style={{
                backgroundColor: 'lightgrey',
                padding: 10,
                borderRadius: 30,
              }}>
              <Icon4 name="filter-frames" size={15} color={'black'} />
            </View>
            <View>
              <Text style={{fontSize: 20, left: 15, top: 5}}>
                Add profile video
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            ImagePicker.openCamera({
              width: 300,
              height: 400,
              cropping: true,
              useFrontCamera: true,
            }).then(image => {
              console.log(image);
              this.setState(data);
            });
          }}>
          <View style={{flexDirection: 'row', padding: 10, right: 70}}>
            <View
              style={{
                backgroundColor: 'lightgrey',
                padding: 10,
                borderRadius: 30,
              }}>
              <Icon3 name="camera" size={15} color={'black'} />
            </View>
            <View>
              <Text style={{fontSize: 20, left: 15, top: 5}}>Take Photo</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            ImagePicker.openPicker({
              width: 300,
              height: 400,
              cropping: true,
            }).then(image => {
              console.log(image);
              this.setState(data);
            });
          }}>
          <View style={{flexDirection: 'row', padding: 10, right: 70}}>
            <View
              style={{
                backgroundColor: 'lightgrey',
                padding: 10,
                borderRadius: 30,
              }}>
              <Icon5 name="files-o" size={15} color={'black'} />
            </View>
            <View>
              <Text style={{fontSize: 20, left: 15, top: 5}}>Upload Photo</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection: 'row', padding: 10, right: 70}}>
            <View
              style={{
                backgroundColor: 'lightgrey',
                padding: 10,
                borderRadius: 30,
              }}>
              <Icon name="ios-person-circle-sharp" size={15} color={'black'} />
            </View>
            <View>
              <Text style={{fontSize: 20, left: 15, top: 5}}>
                View profile picture
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
