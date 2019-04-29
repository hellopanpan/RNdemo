import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput , TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from "react-redux"
class shopHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LocalPosition: '定位中...'
    };
  }
  //  地址你解析
  getPosName(latitude = 39.984154, longitude = 116.307490) {
    fetch(`https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=LYIBZ-LAG33-Y6C3R-363NH-AQRVK-SXBF5&get_poi=0`,{
      method: 'GET',
    }).then((response) => response.json())
    .then((responseJson) => {
      // this.setState({LocalPosition: responseJson.result.address})
      //todo success
      this.props.dispatch({
        type: 'UPDATELOCATION',
        location: responseJson.result.address || '重新获取定位'
      })
    })
    .catch((error) => {
      console.log(error)
      //todo error
    });
  }
  // 获取定位
  getlocal() {
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
        this.setState({ LocalPosition: ValInfo }); //如果为空的话 没允许开启定位服务
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  };
  componentDidMount() {
    //  获取位置
    this.getlocal()
  }
  render() {
    return (
      <View style={{display: 'flex', flexDirection: 'row', paddingLeft: 10,marginTop: 10}}>
        <TouchableOpacity onPress={this.props.goLocation}>
          <View style={styles.top} >
              <FontAwesome style={styles.topIcon} name={'map-marker'} size={28}></FontAwesome>
              <Text style={styles.topText} numberOfLines={1} ellipsizeMode="tail" >{ this.props.location}</Text>
              {/* <Ionicons name={'ios-arrow-down'} size={22} style={{color: '#999'}}></Ionicons> */}
            </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={this.props.goSearch}>
          <View style={styles.inputTop}>
            <Ionicons name={'ios-search'} size={20} style={styles.inputTopText}></Ionicons>
            <Text style={styles.inputTopInput}> 搜索商品</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.goMy}>
          <View style={styles.person}>
            <Ionicons name={'ios-person'} size={22} style={{height: 22, color: 'tomato'}} ></Ionicons>
            <Text style={styles.text03}>我的</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect((state,props)=>{
  return state
})(shopHeader);

const styles = StyleSheet.create({
  left: {
    width: 90, height: '100%',
    backgroundColor: '#fff'
  },
  right:{
    backgroundColor: '#ededed',
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
    color: 'tomato'
  },
  topText: {
    paddingLeft: 5,
    paddingRight: 3,
    maxWidth: 140
  },
  inputTop: {
    height: 34,
    minWidth: 150,
    paddingTop: 3,
    backgroundColor: "#fff",
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: "center",
    borderWidth: 1,
    borderColor: '#cccc',
    justifyContent: "center"
  },
  inputTopText: {
    color: '#999',
    marginRight: 10,
    paddingLeft: 19
  },
  inputTopInput: {
    height: 20,
    borderColor: null , 
    borderWidth:0,
    padding: 0, 
    flex: 1,
    color: '#999'
  },
  person: {
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    marginLeft: 5
  },
  text03: {
    fontSize: 12,
    color: '#666'
  }
})
