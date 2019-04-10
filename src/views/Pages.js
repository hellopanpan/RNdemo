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
  
  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>pages</Text>
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