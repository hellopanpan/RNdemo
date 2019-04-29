import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-navigation';
import {connect} from "react-redux"
class Location1 extends Component {
  static navigationOptions = ({navigation}) => {
    const { params } = navigation.state;
    return {
      title: '我的位置',
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      LocalPosition: [],
      loading: false
    };
  }
  //  地址你解析
  getPosName(latitude = 39.984154, longitude = 116.307490) {
    fetch(`https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=LYIBZ-LAG33-Y6C3R-363NH-AQRVK-SXBF5&get_poi=1`,{
      method: 'GET',
    }).then((response) => response.json())
    .then((responseJson) => {
      this.setState({LocalPosition: responseJson.result.pois || []})
      //todo success
      this.setState({loading: false})
    })
    .catch((error) => {
      console.log(error)
      this.setState({loading: false})
      //todo error
    });
  }
  // 获取定位
  getlocal() {
    this.setState({loading: true})
    navigator.geolocation.getCurrentPosition(
      val => {
        let ValInfo =
          '速度：' + val.coords.speed + '\n经度：' + val.coords.longitude +
          '\n纬度：' +val.coords.latitude +'\n准确度：' +val.coords.accuracy +
          '\n行进方向：' + val.coords.heading + '\n海拔：' + val.coords.altitude +
          '\n海拔准确度：' + val.coords.altitudeAccuracy + '\n时间戳：' + val.timestamp;
        this.getPosName(val.coords.latitude, val.coords.longitude) 
      },
      val => {
        let ValInfo = '获取坐标失败：' + val;
        this.setState({loading: false})
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  };
  select(item) {
    this.props.navigation.navigate('Shop')
    this.props.dispatch({
      type: 'UPDATELOCATION',
      location: item.title || '重新获取定位'
    })
  };
  componentDidMount() {
    this.getlocal()
  }
  render() {
    let loading = null 
    if(this.state.loading) {
      loading = <View style={styles.loading}>
        <Text style={{color: '#4f9fcf'}}>定位中...</Text>
      </View>
    }
    return (
      <SafeAreaView style={styles.wrap}>
        <View>
          <Text style={styles.text01}>请选择所在位置 </Text>
        </View>
        {loading}
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
        <ScrollView>
          {
            this.state.LocalPosition.map((item, index) => {
              return <TouchableOpacity key={index} onPress={this.select.bind(this,item)}>
                <View style={styles.item}>
                  <View>
                    <Text>{item.title}</Text>
                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={{width: 280, marginTop: 6}}>{item.address}</Text>
                  </View>
                  <FontAwesome name={'angle-right'} size={16}></FontAwesome>
                </View>
              </TouchableOpacity>
            })
          }
        </ScrollView>
        <TouchableOpacity onPress={this.getlocal.bind(this)}>
          <View style={styles.btn}>
            <FontAwesome name={'compass'} size={16}></FontAwesome>
            <Text style={{marginLeft: 5}}>重新定位</Text>
          </View>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  wrap: {
    paddingLeft: 10,
    paddingTop: 10,
    position: 'relative',
    height: '100%',
    width: '100%',
    position: 'relative', 
  },
  text01: {
    fontSize: 22,
  },
  loading: {
    flexDirection: 'row',
    justifyContent:  'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
    height: '100%',
    width: '100%',
    position: 'absolute', 
    top: 0,
    left: 0,
    zIndex: 10
  },
  item: {
    padding: 16,
    borderColor: '#efefef',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 10
  },
  btn: {
    height: 80,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default connect((state,props)=>{
  return state
})(Location1);
