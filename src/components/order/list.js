import React, { Component } from 'react';
import { View, Text , StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [{
        name: '亲到啤酒'
      },{
        name: '雪花啤酒'
      }]
    };
  }
  render() {
    let lists = this.props.buylist
    console.log(lists)
    let listArr = []
    lists.map(item1 => {
      let price = 0
      let count = 0
      item1.list.map(item2 => {
        price += item2.price * item2.count
        count += item2.count
      })
      listArr.push({
        length: count,
        name: item1.list[0].name,
        price: price
      })
    })
    return (
      <View style={styles.wrap}>
        {listArr.map((item, index) => {
          return <View style={styles.item} key={index}>
            <View style={styles.top}>
              <Text style={styles.text01} numberOfLines={1} ellipsizeMode={'tail'} >{item.name}等</Text>
              <Text style={styles.text02}>共{item.length}件商品</Text>
              <FontAwesome name={'angle-right'} size={14}></FontAwesome>
            </View>
            <Text style={ styles.time}>2018-7-1 18:21</Text>
            <View style={styles.bottom}>
              <Text style={styles.text03}>总价¥{item.price}</Text>
              <TouchableOpacity style={styles.btn01} onPress={()=>{this.props.cancel(index)}}>
                <Text style={styles.text04}>取消</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn02}>
                <Text style={styles.text05}>付款</Text>
              </TouchableOpacity>
            </View>
          </View>
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    height: 90,
    width: 340,
    backgroundColor: '#efefef',
    marginTop: 15,
    padding: 10,
    borderRadius: 4,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text01: {
    width: 200
  },
  time: {
    color: '#666',
    fontSize: 13,
    marginTop: 5
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text03: {
    width: 150
  },
  btn01: {
    width: 70,
    height: 26,
    justifyContent:'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'tomato',
    borderRadius: 4,
  },
  btn02: {
    width: 70,
    height: 26,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
    borderRadius: 4,
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

export default List;
