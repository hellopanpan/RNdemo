import React, { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { 
  View, 
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';

class Love extends Component {
  constructor(props) {
    super(props);
    this.spinValue1 = new Animated.Value(0);
    this.state = {
    };
  }
  componentDidMount() {
    
    this.spin(1)
  }
  spin(val) {  //重置为0
    this.spinValue1.setValue(0)
    
    Animated.timing( //并驱动 this.spinValue 的值以 Easing.linear 的动画方式在 4000 毫秒从 0 变成 1。
      this.spinValue1,
      {
        toValue: val,
        duration: 3000,
        easing: Easing.linear
      }
    ).start(()=> this.spin(1))
     //调用 start()，并将 this.spin 作为回调传递给 start，它将在(一次)动画完成之后调用，这也是创建无穷动画的一种基本方式。
  }
  render() {
    const spin = this.spinValue1.interpolate({
      inputRange: [0, 1 ],
      outputRange: ['0deg', '360deg']
    });
    return (
      <View style={styles.cont}>
        <View style={styles.cont1}>
          <FontAwesome name={'heart'} size={26} style={{color: '#fff'}}></FontAwesome>
          <Text style={{color: '#fff'}}>3.7w</Text>
        </View>
        <View style={styles.cont1}>
          <FontAwesome name={'commenting'} size={26} style={{color: '#fff'}}></FontAwesome>
          <Text style={{color: '#fff'}}>2226</Text>
        </View>
        <View style={styles.cont1}>
          <FontAwesome name={'share'} size={26} style={{color: '#fff'}}></FontAwesome>
          <Text style={{color: '#fff'}}>2226</Text>
        </View>
        <View style={styles.cont1}>
          <Animated.View style={[styles.piccont, {transform: [{rotate: spin}]}]}>
            <Image source={require('../../assets/images/1.jpg')} 
              style={styles.pngs}
            />
          </Animated.View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cont: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cont1: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  pngs: {
    height: 26,
    width: 26,
    borderRadius: 13,
  },
  piccont: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#222'
  }
})
export default Love;
