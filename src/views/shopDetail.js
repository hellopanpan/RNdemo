import React, { Component } from 'react';
import { View, Text ,StyleSheet, TouchableWithoutFeedback, TouchableOpacity, ScrollView, Image} from 'react-native';
import {connect} from "react-redux"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-navigation';
import ShopBottom from '../components/shop/shopBottom'

class shopName extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '商品详情',
  });
  constructor(props) {
    super(props);
    this.state = {
    };
  };
  // 去往结算页
  goNext() {
    this.props.navigation.navigate('ShopComfirm')
  };
  _reduceBtn(id) {
    this.props.dispatch({
      type: 'REDUCESHOP',
      id: id
    })
  };
  
  _addBtn(id) {
    this.props.dispatch({
      type: 'ADDSHOP',
      id: id
    })
  }

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item', {});
    return (
      <SafeAreaView style={{height: '100%',flex: 1,backgroundColor: '#efefef', }}>
        <View style={{height: '100%',flex: 1,backgroundColor: '#efefef', }}>
          <ScrollView style={{flex: 1}}>
            <View style={styles.wrap}>
            <View style={styles.item}>
              <Image source={require('../assets/images/shop.jpg')} style={styles.goodspic}></Image>
              <View style={styles.goodsright}>
                <Text style={styles.goodstitle} numberOfLines={2} ellipsizeMode="tail">{item.name}</Text>
                <View style={styles.goodsbottom}>
                  <Text style={styles.goodsprice}>￥{item.price}</Text>
                  <View style={styles.btns}>
                    <TouchableOpacity style={styles.reducebtn} onPress={this._reduceBtn.bind(this, item._id)}>
                      <Ionicons name={'ios-remove'} size={22} style={{color: '#fff'}}></Ionicons>
                    </TouchableOpacity>
                    <Text>{item.count}</Text>
                    <TouchableOpacity style={styles.addbtn} onPress={this._addBtn.bind(this, item._id)}>
                      <Ionicons name={'ios-add'} size={22} style={{color: '#fff'}}></Ionicons>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            </View>
          </ScrollView>
          <View style={styles.bottom}>
          <ShopBottom goNext={this.goNext.bind(this)}></ShopBottom>
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
  },
  header: {
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 10
  },
  banner: {
    height: 90,
    width: '100%',
    borderRadius: 3
  },
  item: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10
  },
  footertext: {
    backgroundColor: '#4398ff',
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 80,
    lineHeight: 80
  },
  goodspic: {
    width: "100%",
    borderRadius: 3
  },
  goodsright:{
    width: '100%',
    marginTop: 10
  },
  goodstitle: {
    width: '100%',
    marginBottom: 15,
    lineHeight: 20,
    fontSize: 14,
  },
  goodsbottom: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  goodsprice: {
    color: 'tomato',
  },
  btns: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 80,
    paddingRight: 10
  },
  addbtn: {
    height: 20,
    width: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tomato',
    borderRadius: 10,
  },
  reducebtn:{
    height: 20,
    width: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#666',
    borderRadius: 10,
  }
})

export default connect((state,props)=>{
  return state
})(shopName);

