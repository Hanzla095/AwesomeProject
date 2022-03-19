import {Text, View, FlatList, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';
import {ListItem} from 'react-native-elements';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DataList: [
        {
          id: 1,
          name: 'Pizza',
          desp: 'Chilli garlic large pizza',
          price: 200,
          time: 20,
          img: require('./Assets/images/imf/11.jpg'),
        },
        {
          id: 2,
          name: 'Burger',
          desp: 'Chilli garlic large Burger',
          price: 200,
          time: 20,
          img: require('./Assets/images/imf/12.jpg'),
        },
        {
          id: 3,
          name: 'Samosa',
          desp: 'Chilli garlic large Samosa',
          price: 200,
          time: 20,
          img: require('./Assets/images/imf/13.jpg'),
        },
        {
          id: 4,
          name: 'Samosa',
          desp: 'Chilli garlic large Samosa',
          price: 200,
          time: 20,
          img: require('./Assets/images/imf/14.jpg'),
        },
        {
          id: 5,
          name: 'Samosa',
          desp: 'Chilli garlic large Samosa',
          price: 200,
          time: 20,
          img: require('./Assets/images/imf/15.jpg'),
        },
        {
          id: 6,
          name: 'Samosa',
          desp: 'Chilli garlic large Samosa',
          price: 200,
          time: 20,
          img: require('./Assets/images/imf/16.jpg'),
        },
        {
          id: 7,
          name: 'Samosa',
          desp: 'Chilli garlic large Samosa',
          price: 200,
          time: 20,
          img: require('./Assets/images/imf/17.jpg'),
        },
      ],
    };
  }
  Itemstyle = props => (
    <View style={styles.main}>
      <View>
        <Image style={{height: 100, width: 100}} source={props.item.img} />
      </View>
      <View style={styles.txt}>
        <Text>{props.item.name}</Text>
        <Text>{props.item.desp}</Text>
        <Text>{props.item.price}</Text>
        <Text>{props.item.time}</Text>
      </View>
    </View>
  );

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList data={this.state.DataList} renderItem={this.Itemstyle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: 'white',
    elevation: 2,
  },
  txt: {
    left: 15,
    top: 10,
  },
});
