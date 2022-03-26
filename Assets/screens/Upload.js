import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {Component, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';

export default function ImagePick() {
  const [Image1, setImage] = useState('');

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          padding: 10,
          elevation: 5,
        }}>
        <TouchableOpacity>
          <Icon name="chevron-back" size={25} color={'green'} />
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            left: 100,
            fontWeight: 'bold',
          }}>
          Fill the Form
        </Text>
      </View>

      <View
        style={{
          borderWidth: 1,
          padding: 70,
          marginHorizontal: 20,
          marginVertical: 30,
          borderStyle: 'dashed',
          bottom: 10,
        }}>
        <Text style={{textAlign: 'center', fontSize: 20}}>
          Your image here{' '}
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 100,
          bottom: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            ImagePicker.openPicker({
              multiple: true,
              cropping: true,
            }).then(images => {
              console.log(images);
              setImage(images[0].path);
            });
          }}>
          <Text
            style={{
              backgroundColor: 'purple',
              padding: 10,
              borderRadius: 10,
              textAlign: 'center',
              fontSize: 15,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Upload Image
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: 'lightgrey',
          marginHorizontal: 20,
          borderRadius: 10,
        }}>
        <TextInput style={{left: 20, width: 300}} placeholder="Your Name" />
      </View>
      <View
        style={{
          backgroundColor: 'lightgrey',
          marginHorizontal: 20,
          borderRadius: 10,
          marginVertical: 10,
        }}>
        <TextInput style={{left: 20, width: 300}} placeholder="Your Email" />
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{left: 15, fontWeight: 'bold', color: 'black'}}>
          Product Discription
        </Text>
        <Text style={{right: 15, fontWeight: 'bold', color: 'black'}}>
          500 words
        </Text>
      </View>

      <View
        style={{
          borderWidth: 1,
          padding: 100,
          marginHorizontal: 15,
          marginVertical: 4,
          borderStyle: 'dashed',
        }}></View>

      <View
        style={{
          marginVertical: 10,

          marginHorizontal: 15,
        }}>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
              borderRadius: 20,
              backgroundColor: 'green',
              padding: 15,
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        source={{uri: Image1}}
        style={{height: 170, width: 320, bottom: 674, left: 20}}
      />
    </View>
  );
}
