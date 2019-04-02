import React from "react";
import { View, Text, Button, StyleSheet,FlatList, Image, TouchableOpacity} from "react-native";
import Swiper from 'react-native-swiper';
import * as Api from '../api/index'
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: 1,
      isShow: false,
      items:[]
    };
  };
  componentDidMount() {
    this._getPic()
  };
  // get pic
  _getPic = () => {
    var item;
    for (let i = 0; i < 3; i++){
        switch (i){
            case 0:{
                item = 'http://blogdailyherald.com/wp-content/uploads/2013/04/382065_560557460633306_930109857_n.jpg';
                break;
            }
            case 1:{
                item = 'http://img0.pclady.com.cn/pclady/pet/choice/cat/1701/6.jpg';
                break;
            }
            default:{
                item = 'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/3812b31bb051f819dc048662dbb44aed2e73e7f1.jpg';
                break;
            }
        }
        this.state.items.push(item);
    }
    console.log(this.state.items + '111');
    this.setState({
        isShow: true,
        items: this.state.items
    })
  };
  // 轮播图
  _getSwiper() {
    let swperStr = null;
    let ScreenWidth = 375;
    let H = 149;
    if (this.state.isShow) {
      swperStr = <Swiper autoplay = {false} showsPagination = {true} dotColor="white"
        activeDotColor='yellow' horizontal={true} style={{height: H, position: 'relative'}}>
          {
            this.state.items.map((item, index) => {
              console.log(item, index)
              //cover: 等比例放大; center:不变; contain:不变; stretch:填充;
              return (
                <View key = {index} style={[{height: H}, styles.tabs]}>
                  {
                    ['1','2','3','4','5','6','7','8', 9, 10].map((item2, index2 )=> {
                      return (
                        <View key={index2} style={{width: 60, margin: 5, justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}} >
                          <Image style={{height: 40, width: 40, borderRadius: 20}}  resizeMode='cover' source={{uri: item}}/>
                          <Text style={{textAlign: 'center', marginTop: 5}}>萌宠</Text>
                        </View>
                      )
                    })
                  }
                </View>    
              )
            })
          }
      </Swiper>
    } else {
      swperStr = <View style={{height:H, width: ScreenWidth, backgroundColor:'green'}}/>
    };
    return swperStr
  };
  render() {
    const data = this.props.data || "null";
    let swperStr = this._getSwiper();
    return (
      <View style={styles.container}>
        {swperStr}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 149,
    borderRadius: 10,
    overflow: 'hidden'
  },
  tabs: {
    position: 'relative', backgroundColor: 'skyblue',
    justifyContent: "flex-start", 
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
  
})