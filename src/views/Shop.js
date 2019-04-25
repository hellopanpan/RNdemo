import React from "react";
import { View, Text, Button, Alert, Switch,ScrollView, Picker, StyleSheet,TextInput, FlatList, SectionList, Image, TouchableOpacity} from "react-native";
import { SafeAreaView } from 'react-navigation';
import {connect} from "react-redux"
import * as Api from '../api/index'
import Ionicons from 'react-native-vector-icons/Ionicons';

import ShopHeader from '../components/shop/shopHeader'
import ShopSort from '../components/shop/shopSort'
import ShopList from '../components/shop/shopList'
import ShopBottom from '../components/shop/shopBottom'
import shopdata from '../components/shop/shopdata'

class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    const { params } = navigation.state;
    return {
      header: null,
      // title: 'buy',
      headerBackTitle: '首页',
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      flag: 1,
      isShowingText: 0 ,
      movies: [],
      selected: new Map(),
      text: '', 
      modalVisible: false,
      switch: true,
      selectItem: {},
      buy: false
    };
  };
  componentDidMount() {
    this.props.dispatch({
      type: 'INITSHOP',
      list: shopdata
    })
    // Alert.alert(
    //   'Alert Title',
    //   'My Alert Msg'
    // )
  };
  // 去往结算页
  goNext() {
    this.props.navigation.navigate('ShopComfirm')
  };
  // 详情
  goDetail(item) {
    this.props.navigation.navigate('ShopDetail',{item: item})
  };
  // my
  goMy() {
    this.props.navigation.navigate('My')
  };
  // search
  goSearch() {
    this.props.navigation.navigate('Search')
  };
  render() {
    const data = this.props.data || "null";
    return (
      <SafeAreaView style={{flex: 1, height: '100%', backgroundColor: '#fff'}}>
        <ShopHeader goMy={this.goMy.bind(this)} goSearch={this.goSearch.bind(this)}></ShopHeader>
        <View style={{backgroundColor: 'blue', flex: 1, display: 'flex', flexDirection: 'row'}}>
          <View style={styles.left}>
            <ShopSort></ShopSort>
          </View>
          <View style={styles.right}>
            <ShopList goDetail={this.goDetail.bind(this)} ></ShopList>
          </View>
        </View>
        <ShopBottom goNext={this.goNext.bind(this)} ></ShopBottom>
      </SafeAreaView>  
    );
  }
}
export default connect((state,props)=>{
  return state
})(HomeScreen);

const styles = StyleSheet.create({
  left: {
    width: 90, height: '100%',
    backgroundColor: '#fff',
    borderRightWidth: 1,
    borderColor: '#efefef'
  },
  right:{
    backgroundColor: '#fff',
    flex: 1
  },
  top: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "flex-start",
    width: 160,
    height: 40
  },
  topIcon: {
    color: '#3880ff'
  },
  topText: {
    paddingLeft: 10,
    paddingRight: 10
  },
  inputTop: {
    height: 40,
    minWidth: 200,
    backgroundColor: "#999",
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10
  },
  inputTopText: {
    color: '#fff',
    marginRight: 10,
    paddingLeft: 10
  },
  inputTopInput: {
    height: 20,
    borderColor: null , 
    borderWidth:0,
    padding: 0, 
    flex: 1,
    color: '#fff'
  }
})