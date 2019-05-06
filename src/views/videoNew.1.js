import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
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
    this.spinValue = new Animated.Value(0); //使用 Animated.Value 声明了一个 spinValue 变量，并传了一个 0 作为初始值。
    this.state={
      top: 0,
      bg: 'tomato',
      num: 0
    }
  }

  componentDidMount() { 
    // this.spin();    //app加载后运行动画
  }

  spin(val) {  //重置为0
    Animated.timing( //并驱动 this.spinValue 的值以 Easing.linear 的动画方式在 4000 毫秒从 0 变成 1。
      this.spinValue,
      {
        toValue: val,
        duration: 300,
        easing: Easing.linear
      }
    ).start(); //调用 start()，并将 this.spin 作为回调传递给 start，它将在(一次)动画完成之后调用，这也是创建无穷动画的一种基本方式。
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
      this.spinValue.setValue(move);
      this.setState({
        top: this._top+gs.dy,
      })
    },
    onPanResponderRelease: (evt,gs)=>{
      if (gs.dy > 0) {
        let num = this.state.num+1;
        this.spin(-num);
        this.setState({
          num,
          top: num * height,
        })
      } else {
        let num = this.state.num-1;
        this.spin(-num);
        this.setState({
          num,
          top: num * height,
        })
      }
    }
  })
  render() {
    //创建了一个 spin 变量，并调用了 this.spinValue 的 interpolate 方法。
    //interpolate 方法可以在任何一个 Animated.Value 返回的实例上调用，该方法会在属性更新之前插入一个新值，如将 0~1 映射到 1~10。
    //在我们的demo中，利用 interpolate 方法将数值 0~1 映射到了 0deg~360deg。我们传递了 inputRange 和 outputRange 参数给interpolate 方法，并分别赋值为[0, 1] 和 & [‘0deg’, ‘360deg’]。
    const spin = this.spinValue.interpolate({
      inputRange: [-1, 1],
      outputRange: [0, -2*height]
    });
    return (
      <View style={styles.container}>
        <Animated.View
          {...this.panResponder.panHandlers}
          style={{
            position: 'absolute',
            top: 0,
            height: 3 * height,
            width: '100%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: this.state.bg,
            transform: [{translateY: spin}]
          }}
        >
        <View style={{
            height: height,
            width: '100%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'tomato'
          }}>

        </View>
        <View style={{
            height: height,
            width: '100%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'yellow'
          }}>

        </View>
        <View style={{
            height: height,
            width: '100%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'blue'
          }}>

        </View>
      </Animated.View>
    </View>
    )
  }
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  
});