import React from "react";
import { View, Text, TouchableWithoutFeedback,Button, StyleSheet,FlatList, Image, TouchableOpacity} from "react-native";
import Swiper from 'react-native-swiper';
import * as Api from '../api/index'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
let selectIndex = 0;
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: 1,
      isShow: false,
      items:[],
      selectIndex: 0,
      paused: false
    };
  };
  componentDidMount() {
    this._getPic()
  };
  // get pic
  _getPic = () => {
    var item;
    for (let i = 0; i < 4; i++){
        switch (i){
            case 0:{
                item = {
                  pic: 'http://blogdailyherald.com/wp-content/uploads/2013/04/382065_560557460633306_930109857_n.jpg',
                  source: require('../assets/images/1.mp4'),
                };
                break;
            }
            case 1:{
                item = {
                  pic: 'http://img0.pclady.com.cn/pclady/pet/choice/cat/1701/6.jpg',
                  source: require('../assets/images/2.mp4')
                }
                break;
            }
            case 2:{
              item = {
                pic: 'http://img0.pclady.com.cn/pclady/pet/choice/cat/1701/6.jpg',
                source: require('../assets/images/3.mp4')
              }
              break;
            }
            default:{
                item = {
                  pic: 'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/3812b31bb051f819dc048662dbb44aed2e73e7f1.jpg',
                  source: require('../assets/images/4.mp4')
                }
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
  indexChange(index) {
    this.setState({
      selectIndex: index,
      paused: false
    })    
  };
  pauseIt() {
    this.setState({paused: !this.state.paused})
  };
  onPressIn(e) {
    this.setState({
      PressInX: e.nativeEvent.locationX,
      PressInY: e.nativeEvent.locationY
    })
  };
  onPressOut(e) {
    let inx = this.state.PressInX;
    let iny = this.state.PressInY;
    let outx = e.nativeEvent.locationX;
    let outy = e.nativeEvent.locationY;
    let dis = (outy-iny)*(outy-iny) + (outx-inx) * (outx-inx);
    if (dis > 20) {
      alert('next')
    }else {
      this.setState({paused: !this.state.paused})
    }
  };
  // 轮播图
  _getSwiper() {
    let swperStr = null;
    let ScreenWidth = 375;
    let H = '100%';
    if (this.state.isShow) {
      swperStr = <Swiper autoplay = {false} showsPagination = {false} dotColor="white"
        index={0} onIndexChanged={this.indexChange.bind(this)}
        activeDotColor='yellow' horizontal={false} style={{ position: 'relative'}}>
          {
            this.state.items.map((item, index) => {
              console.log(item, index)
              //cover: 等比例放大; center:不变; contain:不变; stretch:填充;
              let index1 = index
              let play = <View></View>
              if (!((index1 == this.state.selectIndex) && !this.state.paused)) {
                play =<View style={styles.play} >
                  <Ionicons name={'ios-play'} onPress={this.pauseIt.bind(this)} size={60} style={{color: '#fff'}}></Ionicons>
                </View>
              }
              return (
                <View key = {index} style={{height: H, position: 'relative',justifyContent: "flex-start"}}>
                  {/* <Image style={{height: H}}  resizeMode='cover' source={{uri: item.pic}}/> */}
                  <TouchableWithoutFeedback onPress={this.pauseIt.bind(this)}>
                    <Video
                      source={item.source}
                      ref={(ref) => {
                        this.player = ref
                      }}
                      resizeMode="cover" 
                      paused={!((index1 == this.state.selectIndex) && !this.state.paused)}
                      repeat={true}                                   // Store reference
                      onBuffer={this.onBuffer}                // Callback when remote video is buffering
                      onError={this.videoError}               // Callback when video cannot be loaded
                      style={styles.backgroundVideo}   // [iOsS]进度控制，每250ms调用一次，以获取视频播放的进度
                      progressUpdateInterval={250.0}
                      volume={this.state.volume}
                      playInBackground={true} 
                    />
                  </TouchableWithoutFeedback>
                  {play}
                </View>    
              )
            })
          }
      </Swiper>
    } else {
      swperStr = <View style={{height:'100%', width: ScreenWidth, backgroundColor:'green'}}/>
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
    height: "100%",
    borderRadius: 0,
    overflow: 'hidden'
  },
  backgroundVideo: {
    position: 'absolute',
    backgroundColor: 'green',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  play: {
    position: 'absolute',
    top: "50%",
    left: '50%',
    opacity: 0.8
  }
})