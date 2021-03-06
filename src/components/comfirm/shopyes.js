import React, { Component } from 'react';
import { View, Text , StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from "react-redux"

class shopBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let numall = 0
    let price = 0
    this.props.shoplist.map(item1 => {
      item1.childs.map(item2 => {
        numall += item2.count
        price += (item2.count * item2.price)
      })
    })
    return (
      <View style={styles.wrap}>
        <View style={styles.count}>
          <Text>待支付： ￥{price}</Text>
          <Text style={styles.text001}>已达起售数量</Text>
        </View>
        <TouchableOpacity onPress={this.props.PayOk}>
          <View style={styles.btns}>
            <Text style={styles.btnsText}>提交订单</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect((state,props)=>{
  return state
})(shopBottom)

const styles = StyleSheet.create({
  wrap:{
    height: 60,
    backgroundColor: '#e6e6e6',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shop: {
    height: 50,
    width: 50,
    backgroundColor: '#099',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    position: 'relative'
  },
  num: {
    position: 'absolute',
    top: 0,
    right: -6,
    width: 16,
    height: 16,
    backgroundColor: '#333',
    lineHeight: 16,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  numtext: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'center',
  },
  count: {
    width: 250,
    marginLeft: 10
  },
  btns: {
    height: 40,
    width: 90,
    backgroundColor: 'tomato',
    borderRadius: 5
  },
  btnsText: {
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 18,
    color: '#fff'
  },
  text001: {
    fontSize: 12,
    color: '#999'
  }
})
