import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from "react-redux"
class PayOk extends Component {
  static navigationOptions = ({navigation}) => ({
    header: null
  })
  constructor(props) {
    super(props);
    this.state = {
    };
  };
  componentDidMount() {
    this.props.dispatch({type: 'REMOVESHOPCOUNT'})
  }
  goToOrder() {
    this.props.navigation.navigate('Order')
  };
  goIndex() {
    this.props.navigation.navigate('Shop', {buy: true})
    // this.props.navigation.popToTop()
  }
  render() {
    return (
      <View style={styles.wrap}>
          <View style={styles.circle}>
            <FontAwesome name={'check'} size={40} style={{color: 'tomato'}}></FontAwesome>
          </View>
          <Text style={styles.textok}>支付成功</Text>
          <TouchableOpacity style={styles.btn01} onPress={this.goIndex.bind(this)}>
            <Text style={styles.text04}>返回首页</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn02} onPress={this.goToOrder.bind(this)}>
            <Text style={styles.text05}>查看订单</Text>
          </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    height: 90,
    width: 90,
    borderWidth: 6,
    borderRadius: 45,
    borderColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textok: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
    marginTop: 10
  },
  btn01: {
    width: 120,
    height: 30,
    justifyContent:'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'tomato',
    borderRadius: 4,
    marginTop: 300
  },
  btn02: {
    width: 120,
    height: 30,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
    borderRadius: 4,
    marginTop: 20
  },
  text04: {
    color: 'tomato',
    fontSize: 13,
  },
  text05: {
    color: '#fff',
    fontSize: 13,
  }
})
export default connect((state,props)=>{
  return state
})(PayOk);
