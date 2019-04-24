import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from "react-redux"

class SortItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _onPress = () => {
    this.props.onPressItem(this.props.item);
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
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={this._onPress}>
          <Image source={require('../../assets/images/shop.jpg')} style={styles.goodspic}></Image>
        </TouchableOpacity>
        <View style={styles.goodsright}>
          <TouchableOpacity >
            <Text style={styles.goodstitle} numberOfLines={2} ellipsizeMode="tail">{this.props.item.name}</Text>
          </TouchableOpacity>
          <View style={styles.goodsbottom}>
            <Text style={styles.goodsprice}>￥{this.props.item.price}</Text>
            <View style={styles.btns}>
              <TouchableOpacity style={styles.reducebtn} onPress={this._reduceBtn.bind(this, this.props.item._id)}>
                <Ionicons name={'ios-remove'} size={22} style={{color: '#fff'}}></Ionicons>
              </TouchableOpacity>
              <Text>{this.props.item.count}</Text>
              <TouchableOpacity style={styles.addbtn} onPress={this._addBtn.bind(this, this.props.item._id)}>
                <Ionicons name={'ios-add'} size={22} style={{color: '#fff'}}></Ionicons>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    height: 80,
    width: 80,
    borderRadius: 3
  },
  goodsright:{
    flex: 1, 
    marginLeft: 10
  },
  goodstitle: {
    lineHeight: 16,
    fontSize: 13,
    marginBottom: 24,
    color: '#444'
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
})(SortItem)