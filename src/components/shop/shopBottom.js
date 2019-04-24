import React, { Component } from 'react';
import { View, Text , StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from "react-redux"
import SortItem from './shopBottomItem'

class shopBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSelect: false
    };
  }
  remove() {
    this.setState({showSelect: false})
    this.props.dispatch({type: 'REMOVESHOPCOUNT'})
  };
  render() {
    let numall = 0
    let price = 0
    this.props.shoplist.map(item1 => {
      item1.childs.map(item2 => {
        numall += item2.count
        price += (item2.count * item2.price)
      })
    })
    // 结算栏
    let gobuy = null
    if (numall > 0) {
      gobuy = <TouchableOpacity onPress={this.props.goNext}>
        <View style={styles.btns}>
          <Text style={styles.btnsText}>去结算</Text>
        </View>
      </TouchableOpacity>
    } else {
      gobuy = <TouchableOpacity >
        <View style={[styles.btns, styles.btnno]}>
          <Text style={styles.btnsText}>去结算</Text>
        </View>
      </TouchableOpacity>
    }
    // list 
    let dataAll = this.props.shoplist;
    let sortss = []
    dataAll.map(item1 => {
      item1.childs.map(item2 => {
        if(item2.count) {
          sortss.push(item2)
        }
      })
    });
    // 选择器
    let select = null 
    if (this.state.showSelect && sortss.length >0) {
      select = <View style={styles.changes}>
        <TouchableOpacity style={styles.close} onPress={() => {this.setState({showSelect: false})}}></TouchableOpacity>
        <View style={styles.changeCont}>
          <View style={styles.ctop}>
            <Text>已选商品</Text>
            <TouchableOpacity onPress={this.remove.bind(this)}>
              <View style={styles.remove}>
                <Ionicons name={'ios-trash'} size={20} style={{color: '#333',marginRight: 5}}></Ionicons>
                <Text>清空购物车</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.cwrap}>
            <FlatList 
              data={sortss}
              extraData={this.props}
              keyExtractor={(item, index) => item._id}
              renderItem={({item}) =>
                <SortItem item={item}  ></SortItem>  
              }
            />
          </View>
        </View>
      </View>
    }
    return (
      <View style={styles.wrap}>
        {select}
        <TouchableOpacity onPress={() => {this.setState({showSelect: !this.state.showSelect})}}>
          <View style={styles.shop}>
            <Ionicons name={'ios-basket'} size={30} style={{color: '#fff'}}></Ionicons>
            <View style={styles.num}>
              <Text style={styles.numtext}>{numall}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.count}>
          <Text>合计： ￥{price}</Text>
          <Text style={styles.text001}>已达起售数量</Text>
        </View>
        { gobuy }
      </View>
    );
  }
}

export default connect((state,props)=>{
  return state
})(shopBottom)

const styles = StyleSheet.create({
  ctop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    alignItems: 'center'
  }, 
  remove: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  changes: {
    position: 'absolute',
    width: '100%',
    height: 800,
    backgroundColor: 'rgba(0,0,0,0.5)',
    bottom: 60,
    left:0
  },
  changeCont: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
    bottom: 0,
    left:0
  },
  cwrap: {
    maxHeight: 300,
  },
  close: {
    flex: 1
  },
  wrap:{
    height: 60,
    backgroundColor: '#e6e6e6',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  shop: {
    height: 50,
    width: 50,
    backgroundColor: 'tomato',
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
    width: 200,
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
  btnno: {
    backgroundColor: 'tomato',
    opacity: 0.6
  },
  text001: {
    fontSize: 12,
    color: '#999'
  }
})
