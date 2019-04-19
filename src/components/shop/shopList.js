import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from "react-redux"
import SortItem from './shopItem'

class shopSort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sorts: [{
        _id: '1',
        name: '梦百合零压大床房，重庆北站，爱琴海,梦百合零压大床房，重庆北站，爱琴海',
        price: 10,
        count: 10,
        active: false
      },
      {
        _id: '2',
        name: '梦百合零压大床房，重庆北站，爱琴海,梦百合零压大床房，重庆北站，爱琴海休闲零食',
        price: 1,
        count: 14,
        active: true
      },
      {
        _id: '3',
        name: '乳制品梦百合零压大床房，重庆北站，爱琴海,梦百合零压大床房，重庆北站，爱琴海',
        price: 5,
        count: 1,
        active: false
      }]
    };
  };
  header(){
    return (
      <View>
        <Text style={styles.header}>最新活动</Text>
        <Image source={require('../../assets/images/shop.jpg')} style={styles.banner}></Image>
      </View>
    )
  };
  footer(){
    return (
      <Text style={styles.footertext}>"panpan 之家" 技术支持</Text>
    )
  };
  _onPressItem(item) {
    this.props.goDetail(item)
  };
  _press() {
    this.props.dispatch({type: 'ADDSHOP'})
  };
  render() {
    let dataAll = this.props.shoplist;
    console.log(this.props)
    let sortss = []
    dataAll.map(item => {
      if(item.active) {
        sortss = item.childs
      }
    });
    return (
      <View style={styles.wrap}>
        <FlatList 
        data={sortss}
        extraData={this.props}
        keyExtractor={(item, index) => item._id}
        ListHeaderComponent={this.header}
        ListFooterComponent={this.footer}
        renderItem={({item}) =>
          <SortItem item={item} onPressItem={this._onPressItem.bind(this)} ></SortItem>  
        }
      />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrap: {
    padding: 10,
    height: '100%',
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
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  footertext: {
    backgroundColor: '#fff',
    color: '#999',
    borderRadius: 6,
    fontSize: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 80,
    lineHeight: 80
  },
  goodspic: {
    height: 80,
    width: 80,
    borderRadius: 3
  },
  goodsright:{
    flex: 1, 
    marginLeft: 10
  },
  goodstitle: {
    marginBottom: 15,
  },
  goodsbottom: {
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
})(shopSort);
