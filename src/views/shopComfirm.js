import React, { Component } from 'react';
import { View, Text ,StyleSheet,TouchableWithoutFeedback,ScrollView} from 'react-native';
import {connect} from "react-redux"
import Ionicons from 'react-native-vector-icons/Ionicons';
import Location from '../components/comfirm/location'
import List from '../components/comfirm/list'
import ShopYes from '../components/comfirm/shopyes'
class shopName extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '确认订单',
  });
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{height: '100%',flex: 1,backgroundColor: '#efefef', }}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.wrap}>
            <Location></Location>
            <List></List>
          </View>
        </ScrollView>
        
        <View style={styles.bottom}>
          <ShopYes></ShopYes>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%'
  },
  bottom: {
    height: 60,
    backgroundColor: '#444'
  }
})

export default connect((state,props)=>{
  return state
})(shopName);

