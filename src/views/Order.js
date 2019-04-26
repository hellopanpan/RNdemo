import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Tab from '../components/order/tab'
import List from '../components/order/list'
import {connect} from "react-redux"
import { SafeAreaView } from 'react-navigation';
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
    let list = null
    if (buylist.length > 0) {
      list =  <List buylist={buylist} cancel={this.cancel.bind(this)}></List>
    } else {
      list = <Text style={{textAlign: 'center', marginTop: 20, color: '#999' }}>暂无订单数据</Text>
    }
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Tab></Tab>
          <View style={{flex: 1}}>
            <ScrollView>
              { list }
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
      
    );
  }
}

export default connect((state,props)=>{
  return state
})(Order);
