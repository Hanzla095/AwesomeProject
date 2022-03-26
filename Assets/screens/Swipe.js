import {Text, View, Image} from 'react-native';
import React, {Component} from 'react';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/FontAwesome';

export default class Swipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Datalist: [
        {
          img: require('../images/new/3.jpeg'),
          icon: 'like2',
          icon1: 'comment',
          icon2: 'share',
          size: 30,
        },
        {
          img: require('../images/new/8.jpeg'),
          icon: 'like2',
          icon1: 'comment',
          icon2: 'share',
        },
        {
          img: require('../images/new/6.jpeg'),
          icon: 'like2',
          icon1: 'comment',
          icon2: 'share',
        },
        {
          img: require('../images/new/7.jpeg'),
          icon: 'like2',
          icon1: 'comment',
          icon2: 'share',
        },
      ],
    };
  }

  Itemstyle = props => (
    <View style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{justifyContent: 'center'}} source={props.item.img} />
      </View>
    </View>
  );

  render() {
    return (
      <View style={{flex: 1}}>
        <SwiperFlatList
          data={this.state.Datalist}
          renderItem={this.Itemstyle}
          horizontal={false}
          autoplay
          autoplayDelay={2}
          autoplayLoop
          index={2}
          showPagination={false}
        />
      </View>
    );
  }
}
