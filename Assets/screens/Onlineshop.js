import {
  Text,
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Wtsp from './whatsapp';
export default class Onlineshop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setmodal: false,
    };
  }
  Open_Modal = () => {
    this.setState({
      setmodal: true,
    });
  };
  Open_Modal = () => {
    this.setState({
      setmodal: true,
    });
  };
  render() {
    return (
      <View>
        <View style={{padding: 15}}>
          <Text style={{fontSize: 25, color: 'black', fontWeight: '500'}}>
            Best Furniture
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Online');
            }}>
            <Text style={{fontSize: 15}}>Perfect Choice!</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.searchcontainer}>
          <View style={styles.searchbox}>
            <Icon name="search1" size={20} style={styles.searchicon} />
            <TextInput placeholder="Search" style={styles.searchinput} />
          </View>

          <View>
            <Icon1 name="options" size={29} style={styles.optionicon} />
          </View>
        </View>

        <View style={styles.listbox}>
          <Text style={styles.listitem}>All</Text>
          <Text style={styles.listitem}>Chair</Text>
          <Text style={styles.listitem}>Table</Text>
          <Text style={styles.listitem}>Lamp</Text>
          <Text style={styles.listitem}>Floor</Text>
        </View>

        <View style={styles.Maincontainer}>
          <View style={styles.imgbox}>
            <TouchableOpacity onPress={this.Open_Modal}>
              <Image
                style={styles.img}
                source={require('../images/imf/sofa.jpg')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.txtcontainer}>
            <Text style={styles.Irul}>Irul Chair</Text>
            <Text style={styles.Devops}>By DeVops</Text>
            <Text style={styles.Human}>Ergonimical for humans body curve</Text>
            <View style={styles.Pricebox}>
              <Text style={styles.Price}>$109</Text>
              <Text style={styles.Buy}>Buy</Text>
            </View>
          </View>
        </View>
        <View style={styles.Maincontainer}>
          <View style={styles.imgbox}>
            <Image
              style={styles.img}
              source={require('../images/imf/sofa1.jpg')}
            />
          </View>

          <View style={styles.txtcontainer}>
            <Text style={styles.Irul}>Malik Chair</Text>
            <Text style={styles.Devops}>By DeVops</Text>
            <Text style={styles.Human}>Ergonimical for humans body curve</Text>
            <View style={styles.Pricebox}>
              <Text style={styles.Price}>$659</Text>
              <Text style={styles.Buy}>Buy</Text>
            </View>
          </View>
        </View>
        <Modal visible={this.state.setmodal} animationType={'slide'}>
          <Wtsp />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchcontainer: {
    top: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  searchbox: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 4,
    width: 260,
    elevation: 2,
    height: 40,
  },
  searchicon: {
    top: 9,
    left: 7,
  },
  searchinput: {
    left: 14,
  },
  optionicon: {
    backgroundColor: 'lightblue',
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 4,
    elevation: 2,
    height: 40,
  },
  listbox: {
    top: 49,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  listitem: {
    backgroundColor: 'purple',
    paddingHorizontal: 13,
    paddingVertical: 3,
    borderRadius: 15,
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    elevation: 2,
  },
  img: {
    height: 180,
    width: 145,
    top: 10,
    left: 10,
    borderRadius: 15,
  },
  Maincontainer: {
    backgroundColor: 'white',
    top: 80,
    marginHorizontal: 15,
    borderRadius: 20,
    flexDirection: 'row',
    height: 210,
    elevation: 2,
    marginVertical: 8,
  },
  txtcontainer: {
    width: 160,
    left: 22,
    marginVertical: 15,
  },
  Irul: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  Devops: {
    fontSize: 12,
    color: 'black',
    fontWeight: '400',
  },
  Human: {
    top: 15,
    color: 'black',
    fontSize: 14,
  },
  Pricebox: {
    top: 55,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Price: {
    fontSize: 23,
    left: 3,
    color: 'purple',
    fontWeight: 'bold',
  },
  Buy: {
    backgroundColor: 'purple',
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 26,
    fontWeight: 'bold',
    right: 5,
  },
  scr: {
    backgroundColor: 'lightblue',
  },
});
