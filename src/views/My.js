import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class MY extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '个人中心'
  });
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        name: '订单详情',
        icon: 'list-alt',
        size: 18,
        page: 'Order'
      },
      {
        name: '收货地址',
        icon: 'compass',
        size: 22,
        page: 'Adress',
      },
      {
        name: '用户反馈',
        icon: 'commenting',
        size: 18,
        page: 'comment'
      }
    ]
    };
  }
  goNext(page) {
    this.props.navigation.navigate(page)
  };
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Image source={require('../assets/images/shop.jpg')} style={styles.pic}></Image>
          <Text style={styles.text01} numberOfLines={1} ellipsizeMode="tail">Cc成都张学友</Text>
        </View>
        <View style={{paddingTop: 20}}>
          {
            this.state.items.map((item, index)=> {
              return <TouchableOpacity key={index} onPress={this.goNext.bind(this, item.page)}>
                <View style={styles.item}>
                  <FontAwesome name={item.icon} size={item.size} style={{color: 'tomato', width: 22}}></FontAwesome>
                  <Text style={styles.text02}>{item.name}</Text>
                  <FontAwesome name={'angle-right'} size={20} style={{color: '#666'}}> </FontAwesome>
                </View>
              </TouchableOpacity>
            })
          }
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    height: 120,
    width: '100%',
    backgroundColor: 'tomato',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  pic: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  text01: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 20,
    maxWidth: 240
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
    width: '100%',
    paddingLeft: 20
  },
  text02: {
    fontSize: 14,
    color: '#666',
    width: 300,
    marginLeft: 10
  }
})
export default MY;
