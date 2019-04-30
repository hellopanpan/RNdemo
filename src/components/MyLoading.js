import React from "react";
import { ActivityIndicator, StyleSheet, Text, View,Dimensions } from "react-native";

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
let timer = null
export default class MyLoading extends React.Component {
  constructor(props) {
    super(props);
    this.minShowingTime = 200;
    this.state = {
      isLoading : false,
      msg: '加载中....'
    };
  }

  showLoading = (msg = '加载中....', maxtime = 10000 ) => {
    if(timer) clearTimeout(timer);
    this.setState({
      isLoading: true,
      msg
    })
    timer = setTimeout(()=>{
      this.dismissLoading()
    }, maxtime)
  };
  dismissLoading = () => {
    if(timer) clearTimeout(timer);
    this.setState({
      isLoading: false,
    })
  };
 
  render() {
    if (!this.state.isLoading) {
      return null;
    }
    return (
      <View style={{
        flex : 1,
        width : width,
        height : height,
        position : 'absolute',
        // backgroundColor:'red',
        backgroundColor : '#10101088',
      }}>
        <View style={styles.loading}>
          <ActivityIndicator color="white"/>
          <Text style={styles.loadingTitle}>{this.state.msg}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    loading : {
      backgroundColor : '#10101099',
      height : 80,
      width : 100,
      borderRadius : 10,
      justifyContent : 'center',
      alignItems : 'center',
      position : 'absolute',
      top : (height - 80) / 2,
      left : (width - 100) / 2,
    },
    loadingTitle : {
      marginTop : 10,
      fontSize : 14,
      color : 'white'
    }
});