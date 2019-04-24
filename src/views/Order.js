import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Tab from '../components/order/tab'
import List from '../components/order/list'
class Order extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '订单列表'
  })
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Tab></Tab>
        <List></List>
      </View>
    );
  }
}

export default Order;
