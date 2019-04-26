import React, { Component } from 'react';
import { View, Text ,StyleSheet,TouchableWithoutFeedback,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {connect} from "react-redux"
import Ionicons from 'react-native-vector-icons/Ionicons';
import Location from '../components/comfirm/location'
import List from '../components/comfirm/list'
import ShopYes from '../components/comfirm/shopyes'

class shopName extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '确认订单',
  });
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  PayOk() {
    // 订单生成
    let select = []
    let popArr = [].concat(this.props.shoplist)
    popArr.map(item1 => {
      item1.childs.map(item2 => {
        if (item2.count > 0) {
          // 复制
          let itemCopy = {}
          for (var key in item2) {
            itemCopy[key] = item2[key]
          }
          select.push(itemCopy)
        }
      })
    });
    
    this.props.dispatch({
      type: 'ADDBUYLIST',
      list: {
        list: select
      }
    })
    // 跳转
    setTimeout(() => {
      this.props.navigation.navigate('PayOk')
    }, 200)
  };
  render() {
    return (
      <SafeAreaView style={{height: '100%',flex: 1,backgroundColor: '#efefef',}}>
        <View style={{height: '100%',flex: 1,backgroundColor: '#efefef', }}>
          <ScrollView style={{flex: 1}}>
            <View style={styles.wrap}>
              <Location></Location>
              <List></List>
            </View>
          </ScrollView>
          <View style={styles.bottom}>
            <ShopYes PayOk={this.PayOk.bind(this)}></ShopYes>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%'
  },
  bottom: {
    height: 60,
    backgroundColor: '#444'
  }
})

export default connect((state,props)=>{
  return state
})(shopName);

