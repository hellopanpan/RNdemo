import React, { Component } from 'react';
import { View, Text,Image, StyleSheet, FlatList } from 'react-native';
import {connect} from "react-redux"

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let select = []
    this.props.shoplist.map(item1 => {
      item1.childs.map(item2 => {
        if (item2.count > 0) {
          select.push(item2)
        }
      })
    })
    return (
      <View style={styles.wrap}>
          {select.map(item => {
            return <View style={styles.item} key={item._id} >
              <Image source={require('../../assets/images/shop.jpg')} style={styles.goodspic}></Image>
              <View style={styles.text}>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text01}>{item.name}</Text>
                <Text style={styles.text02}>X {item.count}</Text>
              </View>
              <Text style={styles.price}>￥{item.count * item.price}</Text>
            </View>
          })
          
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrap: {
    width: 360,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 80,
    width: '100%',
  },
  goodspic: {
    height: 60,
    width: 60,
    borderRadius: 4,
  },
  text: {
    width: 210,
    margin: 10
  },
  price: {
    fontSize: 16,
    marginBottom: 18,
    width: 55
  },
  text01: {
    fontSize: 14,
    marginBottom: 10
  },
  text02: {
    fontSize: 14,
    color: '#666'
  }
})

export default connect((state,props)=>{
  return state
})(List);
