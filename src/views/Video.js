import React from "react";
import { View,StyleSheet, Image, Text, Modal,Switch, TouchableWithoutFeedback, TouchableHighlight,Picker, PickerIOS, TouchableOpacity,  Button} from "react-native";
import {DrawerActions} from 'react-navigation';
import SettingModal from '../components/settingModal';
import ImagePicker from 'react-native-image-crop-picker';
import Video from 'react-native-video';
export default class HomeScreen2 extends React.Component {
  static navigationOptions = ({navigation,screenProps}) => ({  
      headerTitle: '企业服务'
  });
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      picSource: require('../assets/images/1.jpg'),
      videoSource: require('../assets/images/3.mp4'),
      paused: false,
      volume: 1,
      progress: 0,
      PressInX: 0,
      PressInY: 0
    };
  };
  setTime(e) {
    console.log(e)
    let progress = e.currentTime / e.playableDuration * 100
    this.setState({progress})
  };
  _getPic() {
    ImagePicker.openPicker({
      multiple: true
    }).then(images => {
      console.log(images);
      // alert(images)
      
      this.setState({
        picSource: {uri: images[0].sourceURL}
      })
    });
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
    if (dis > 10) {
      alert('next')
    }else {
      this.setState({paused: !this.state.paused})
    }
  };
  render() {
    const data = this.props.data || "null";
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableWithoutFeedback style={{width: '100%', height: '100%'}}
          onPressIn={this.onPressIn.bind(this)}
          onPressOut={this.onPressOut.bind(this)}
        >
          <Video
            source={this.state.videoSource}
            ref={(ref) => {
              this.player = ref
            }}
            resizeMode="cover" 
            paused={this.state.paused}
            repeat={true}                                   // Store reference
            onBuffer={this.onBuffer}                // Callback when remote video is buffering
            onError={this.videoError}               // Callback when video cannot be loaded
            style={styles.backgroundVideo}   // [iOsS]进度控制，每250ms调用一次，以获取视频播放的进度
            progressUpdateInterval={250.0}
            onProgress={this.setTime.bind(this)} 
            volume={this.state.volume}
            playInBackground={true} 
          />
        </TouchableWithoutFeedback>
        <TouchableOpacity
          onPress={() => this.setState({paused: !this.state.paused})}
        >
          <Text >paused</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.setState({volume: (this.state.volume? 0: 1)})}
        >
          <Text >volume</Text>
        </TouchableOpacity>
        <Text>{this.state.progress}</Text>
        <View style={{width: 300,height: 3, backgroundColor: 'gray'}}>
          <View style={{width: this.state.progress+'%', height: 3, backgroundColor: 'skyblue'}}></View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    backgroundColor: 'green',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});