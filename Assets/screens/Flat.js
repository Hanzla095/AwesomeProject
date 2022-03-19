import {Text, View, FlatList} from 'react-native';
import React, {Component} from 'react';
import Online from './Assets/screens/Onlineshop';
import Bd from './Assets/screens/bd';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DataList: [{}, {}, {}],
    };
  }

  render() {
    return (
      <FlatList
        ListHeaderComponent={<Bd />}
        ListFooterComponent={<Text>This is footer</Text>}
        numColumns={6}
        data={this.state.DataList}
        renderItem={({item}) => (
          <View style={{alignItems: 'center', padding: 40}}>
            <Text>Hello</Text>
            <Text>Hello</Text>
            <Text>Hello</Text>
          </View>
        )}
      />
    );
  }
}
