import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Tab from '../components/order/tab'
import List from '../components/order/list'
import {connect} from "react-redux"
class Order extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '订单列表'
  })
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  cancel(index) {
    this.props.dispatch({
      type: 'REMOVEBUYLIST',
      index: index
    })
  }
  render() {
    let buylist = this.props.buylist
    return (
      <View>
        <Tab></Tab>
        <List buylist={buylist} cancel={this.cancel.bind(this)}></List>
      </View>
    );
  }
}

export default connect((state,props)=>{
  return state
})(Order);
