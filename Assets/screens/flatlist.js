import {FlatList, Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import Header from './Assets/Reuseable/Header';
import Footer from './Assets/Reuseable/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DataList: [
        {
          name: 'Hassan',
          reg: 1,
          Age: 22,
          CNIC: 31302,
          Address: 'RYK',
          RollNo: 211,
          color: 'White',
          level: 20,
        },
        {
          name: 'Hamza',
          reg: 2,
          Age: 20,

          CNIC: 31302,
          Address: 'RYK',
          RollNo: 211,
          color: 'White',
          level: 20,
        },
        {
          name: 'Ali',
          reg: 3,
          Age: 22,

          CNIC: 31302,
          Address: 'RYK',
          RollNo: 211,
          color: 'White',
          level: 20,
        },
        {
          name: 'Zain',
          reg: 3,
          Age: 22,
          CNIC: 31302,
          Address: 'RYK',
          RollNo: 211,
          color: 'White',
          level: 20,
        },
      ],
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.state.DataList}
          ListHeaderComponent={<Header />}
          ListFooterComponent={<Footer />}
          numColumns={4}
          renderItem={({item}) => (
            <View style={{padding: 23, marginVertical: 10}}>
              <Text style={styles.txt}>{item.name}</Text>
              <Text style={styles.txt}>{item.Age}</Text>
              <Text style={styles.txt}>{item.reg}</Text>
              <Text style={styles.txt}>{item.RollNo}</Text>
              <Text style={styles.txt}>{item.CNIC}</Text>
              <Text style={styles.txt}>{item.level}</Text>
              <Text style={styles.txt}>{item.Id}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  txt: {
    marginVertical: 31,
    color: 'black',
    fontWeight: 'bold',
  },
});
