import React from "react";
import { View,StyleSheet, Image, Text, Modal,Switch, TouchableWithoutFeedback, TouchableHighlight,Picker, PickerIOS, TouchableOpacity,  Button} from "react-native";
import {DrawerActions} from 'react-navigation';
import SettingModal from '../components/settingModal';
import ImagePicker from 'react-native-image-crop-picker';
import Video from 'react-native-video';
import VedioSwiper from '../components/vedioSwiper'
export default class HomeScreen2 extends React.Component {
  static navigationOptions = ({navigation,screenProps}) => ({  
      header: null
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
        <VedioSwiper></VedioSwiper>
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