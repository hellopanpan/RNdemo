import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import {connect} from "react-redux"
import shopdata from './shopdata'
class SortItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _onPress = () => {
    this.props.onPressItem(this.props.item._id);
  };
  render() {
    let numall = 0;
    this.props.item.childs.map(item2 => {
      numall += item2.count
    })
    let numStr = null
    if (numall > 0) {
      numStr = <View style={styles.icon}>
        <Text style={styles.icontext}>{numall}</Text>
      </View>
    }
    return (
      <View style={{position: 'relative'}}>
        {numStr}
        <TouchableOpacity onPress={this._onPress}>
          <View style={[styles.item, this.props.item.active? styles.itemactive: '']} >
            <View style={[this.props.item.active? styles.itemactiveborder: '']}>
            </View>
            <Text style={[styles.itemtext, this.props.item.active? styles.itemactivetext: '']}>{this.props.item.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

class shopSort extends Component {
  constructor(props) {
    super(props);
  };
  _onPressItem(id) {
    this.props.dispatch({
      type: 'CHANGEACTIVESHOP',
      id: id
    })
  };
  render() {
    return (
      <View style={{height: '100%'}}>
        <FlatList 
        data={this.props.shoplist}
        extraData={this.props}
        keyExtractor={(item, index) => item._id}
        renderItem={({item}) =>
          <SortItem item={item} onPressItem={this._onPressItem.bind(this)}></SortItem>  
        }
      />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  itemactive: {
    backgroundColor: '#fff',
  },
  itemactiveborder: {
    backgroundColor: '#3880ff',
    width: 4,
    height: 20,
    borderRadius: 3,
    marginLeft: 1
  },
  itemtext: {
    color: '#333',
    marginLeft: 12,
  },
  itemactivetext: {
    color: '#3880ff',
  },
  icon: {
    width: 12,
    height: 12,
    position: 'absolute',
    right: 3,
    top: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3880ff',
    borderRadius: 6,
    zIndex: 10
  },
  icontext: {
    color: '#fff',
    fontSize: 8
  }
})
export default connect((state,props)=>{
  return state
})(shopSort);
