import React, { Component } from 'react';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VideoTab from '../components/video/tab'
import VideoLove from '../components/video/lover'
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  PanResponder,
  Dimensions
} from 'react-native';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default class App extends Component { 
  static navigationOptions = ({navigation,screenProps}) => ({  
    header: null
  });
  constructor(props) {  //构造函数
    super(props);
    this.spinValue1 = new Animated.Value(0);
    this.spinValue2 = new Animated.Value(0);
    this.spinValue3 = new Animated.Value(0); //使用 Animated.Value 声明了一个 spinValue 变量，并传了一个 0 作为初始值。
    this.state={
      top: 0,
      bg: 'tomato',
      znum: 0,
      allnum: 8,
      volume: 1,
      pause: false,
      video: [
        require('../assets/images/1.mp4'),
        require('../assets/images/2.mp4'),
        require('../assets/images/3.mp4'),
        require('../assets/images/4.mp4'),
        require('../assets/images/5.mp4'),
        require('../assets/images/6.mp4'),
        require('../assets/images/7.mp4'),
        require('../assets/images/8.mp4')
      ]
    }
  }

  componentDidMount() { 
    // this.spin();    //app加载后运行动画
  }

  spin(val) {  //重置为0
    Animated.parallel([
      Animated.timing( //并驱动 this.spinValue 的值以 Easing.linear 的动画方式在 4000 毫秒从 0 变成 1。
        this.spinValue1,
        {
          toValue: val,
          duration: 300,
          easing: Easing.linear
        }
      ),
      Animated.timing( //并驱动 this.spinValue 的值以 Easing.linear 的动画方式在 4000 毫秒从 0 变成 1。
        this.spinValue2,
        {
          toValue: val,
          duration: 300,
          easing: Easing.linear
        }
      ),
      Animated.timing( //并驱动 this.spinValue 的值以 Easing.linear 的动画方式在 4000 毫秒从 0 变成 1。
        this.spinValue3,
        {
          toValue: val,
          duration: 300,
          easing: Easing.linear
        }
      )
    ]).start()
     //调用 start()，并将 this.spin 作为回调传递给 start，它将在(一次)动画完成之后调用，这也是创建无穷动画的一种基本方式。
  }
  pauseIt() {
    this.setState({
      pause: !this.state.pause
    })
  }
  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: ()=> true,
    onPanResponderGrant: ()=>{
      this._top = this.state.top
      this.setState({bg: 'red'})
    },
    onPanResponderMove: (evt,gs)=>{
      console.log(gs.dx+' '+gs.dy)
      
      let move = -(this._top+gs.dy)/height
      this.spinValue1.setValue(move);
      this.setState({
        top: this._top+gs.dy,
      })
    },
    onPanResponderRelease: (evt,gs)=>{
      if (gs.dy > 0) {
        // 上一个
        let znum = this.state.znum+1;
        if (znum >= 1) znum = 0;
        if(Math.abs(gs.dy)< 20) znum = this.state.znum // 设置滑动阈值
        this.spin(-znum);
        this.setState({
          znum,
          top: znum * height,
          pause: false
        })
      } else {
        // 下一个
        let znum = this.state.znum-1;
        if(-znum >= this.state.allnum-1) znum = -this.state.allnum+1
        if(Math.abs(gs.dy)< 20) znum = this.state.znum // 设置滑动阈值
        this.spin(-znum);
        this.setState({
          znum,
          top: znum * height,
          pause: false
        })
      }
    }
  });
  render() {
    //创建了一个 spin 变量，并调用了 this.spinValue 的 interpolate 方法。
    //interpolate 方法可以在任何一个 Animated.Value 返回的实例上调用，该方法会在属性更新之前插入一个新值，如将 0~1 映射到 1~10。
    //在我们的demo中，利用 interpolate 方法将数值 0~1 映射到了 0deg~360deg。我们传递了 inputRange 和 outputRange 参数给interpolate 方法，并分别赋值为[0, 1] 和 & [‘0deg’, ‘360deg’]。
    const spin1 = this.spinValue1.interpolate({
      inputRange: [-1, 1 ],
      outputRange: [height, -height]
    });
    const spin2 = this.spinValue2.interpolate({
      inputRange: [-1, 1 ],
      outputRange: [height, -height]
    });

    const spin3 = this.spinValue3.interpolate({
      inputRange: [-1, 1 * this.state.allnum],
      outputRange: [height, -height * this.state.allnum]
    });
    
    return (
      <View style={styles.container}>
        {
          this.state.video.map( (item,index) => {
            let play = <View></View>
            if (-this.state.znum !== index || this.state.pause) {
              play =<View style={styles.play} >
                <Ionicons name={'ios-play'} onPress={this.pauseIt.bind(this)} size={60} style={{color: '#fff'}}></Ionicons>
              </View>
            }
            return <Animated.View
              {...this.panResponder.panHandlers}
              key= {index}
              style={{
                position: 'absolute',
                top: height * (index),
                height: height,
                width: '100%',
                flex: 1,
                zIndex: 10 + this.state.allnum - index,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#000',
                transform: [{translateY: spin1}]
              }}
            >
            <TouchableWithoutFeedback onPress={this.pauseIt.bind(this)}>
            <Video
              source={item}
              ref={(ref) => {
                this.player = ref
              }}
              paused={-this.state.znum !== index || this.state.pause}
              resizeMode="contain" 
              repeat={true}                                   // Store reference
              style={styles.backgroundVideo}   // [iOsS]进度控制，每250ms调用一次，以获取视频播放的进度
              progressUpdateInterval={250.0}
              volume={this.state.volume}
              playInBackground={true} 
            />
            </TouchableWithoutFeedback>
            {play}
            <View style={styles.right}>
              <VideoLove></VideoLove>
            </View>
          </Animated.View>
          })
        }
        <View style={styles.tab}>
          <VideoTab></VideoTab>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  backgroundVideo: {
    position: 'absolute',
    backgroundColor: '#0000',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  tab: {
    position: 'absolute',
    height: 60,
    width: '100%',
    left: 0,
    bottom: 0,
    zIndex: 100000
  },
  play: {
    position: 'absolute',
    top: "50%",
    left: '50%',
    opacity: 0.8
  },
  right: {
    position: 'absolute',
    bottom: 80,
    right: 10,
    height: 250,
    width: 60,
    opacity: 0.8
  }
});