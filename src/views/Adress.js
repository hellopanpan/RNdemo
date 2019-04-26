import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import List from '../components/adress/list'
import AddList from '../components/adress/addList'
class Adress extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '地址列表'
  })
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.wrap}>
        <List></List>
        <TouchableOpacity style={styles.addbtn}>
          <Text style={{color: 'tomato'}}>新增地址</Text>
        </TouchableOpacity>
        <View style={styles.edit}>
          <AddList></AddList>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    height: "100%",
  },
  addbtn: {
    marginTop: 20
  },
  edit: {
    width: "100%",
    height: "100%",
    backgroundColor: '#efefef',
    padding: 10,
    position: 'absolute',
    top: 0,
    left: 0
  }
})
export default Adress;
