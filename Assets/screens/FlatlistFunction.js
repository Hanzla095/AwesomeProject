import {Text, View, FlatList, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';

export default class FlatListFunction extends Component {
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
          img: require('../images/imf/11.jpg'),
        },
        {
          id: 2,
          name: 'Burger',
          desp: 'Chilli garlic large Burger',
          price: 200,
          time: 20,

          img: require('../images/imf/11.jpg'),
        },
        {
          id: 3,
          name: 'Samosa',
          desp: 'Chilli garlic large Samosa',
          price: 200,
          time: 20,
          img: require('../images/imf/11.jpg'),
        },
        {
          id: 4,
          name: 'Samosa',
          desp: 'Chilli garlic large Samosa',
          price: 200,
          time: 20,
          img: require('../images/imf/11.jpg'),
        },
        {
          id: 5,
          name: 'Samosa',
          desp: 'Chilli garlic large Samosa',
          price: 200,
          time: 20,
          img: require('../images/imf/11.jpg'),
        },
        {
          id: 6,
          name: 'Samosa',
          desp: 'Chilli garlic large Samosa',
          price: 200,
          time: 20,
          img: require('../images/imf/11.jpg'),
        },
        {
          id: 7,
          name: 'Samosa',
          desp: 'Chilli garlic large Samosa',
          price: 200,
          time: 20,
          img: require('../images/imf/11.jpg'),
        },
        {
          id: 8,
          name: 'Samosa',
          desp: 'Chilli garlic large Samosa',
          price: 200,
          time: 20,
          img: require('../images/imf/11.jpg'),
        },
        {
          id: 9,
          name: 'Samosa',
          desp: 'Chilli garlic large Samosa',
          price: 200,
          time: 20,
          img: require('../images/imf/11.jpg'),
        },
      ],
    };
  }
  Itemstyle = props => (
    <View style={styles.row}>
      <Image
        style={{height: 50, width: 50, borderRadius: 50}}
        source={props.item.img}
      />
    </View>
  );
  Itemstylo = props => (
    <View style={[styles.main, {backgroundColor: props.item.bgclr}]}>
      <View>
        <Image style={{height: 80, width: 80}} source={props.item.img} />
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
      <View>
        <FlatList
          data={this.state.DataList}
          renderItem={this.Itemstyle}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          data={this.state.DataList}
          renderItem={this.Itemstylo}
          showsVerticalScrollIndicator={false}
        />
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
  row: {
    padding: 20,
  },
});
