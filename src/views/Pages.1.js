import React from "react";
import { View, Text, Button, StyleSheet,FlatList, Image, TouchableOpacity} from "react-native";
import { SafeAreaView } from 'react-navigation';
import Swiper from 'react-native-swiper';
import * as Api from '../api/index'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: 1,
      isShow: false,
      items:[],
      selectIndex: 0
    };
  };
  componentDidMount() {
    this._getPic()
  };
  setTime(e) {
    // console.log(e)
    let progress = e.currentTime / e.playableDuration * 100
    this.setState({progress})
  };
  // get pic
  _getPic = () => {
    var item;
    item = [
      require('../assets/images/2.mp4'),
      require('../assets/images/3.mp4'),
      require('../assets/images/2.mp4'),
      require('../assets/images/3.mp4')
    ]
    this.setState({
        isShow: true,
        items: item
    })
  };
  indexChange(index) {
    this.setState({
      selectIndex: index
    })
  };
  // 轮播图
  _getSwiper() {
    let swperStr = null;
    let ScreenWidth = 375;
    let H = '100%';
    if (this.state.isShow) {
      swperStr = <Swiper autoplay = {false} showsPagination = {true} dotColor="white"
        loop={true}
        onIndexChanged={this.indexChange.bind(this)}
        activeDotColor='yellow' horizontal={false} >
          {
            this.state.items.map((item, index) => {
              console.log(item, index)
              return (
                <View key = {index} style={{height: H, position: 'relative',justifyContent: "flex-start"}}>
                  <Text>{index} \\ {this.state.selectIndex}</Text>
                  <Video
                    source={item}
                    ref={(ref) => {
                      this.player = ref
                    }}
                    resizeMode="cover" 
                    paused={ true}
                    repeat={true}                                   // Store reference
                    onBuffer={this.onBuffer}                // Callback when remote video is buffering
                    onError={this.videoError}               // Callback when video cannot be loaded
                    style={styles.backgroundVideo}   // [iOsS]进度控制，每250ms调用一次，以获取视频播放的进度
                    progressUpdateInterval={250.0}
                    onProgress={this.setTime.bind(this)} 
                    volume={this.state.volume}
                    playInBackground={true} 
                  />
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
      <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <View style={{height: '100%'}}>
            {swperStr}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    backgroundColor: 'green',
    top: 40,
    left: 0,
    bottom: 0,
    right: 0,
  }
});