import React, { Component } from 'react';
import { View, Text ,StyleSheet,TouchableWithoutFeedback,} from 'react-native';
import {connect} from "react-redux"
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <TouchableWithoutFeedback >
          <View style={styles.address}>
            <View style={styles.loctionIcon}>
              <Ionicons name={'ios-pin'} size={26} style={{color: 'tomato'}}></Ionicons>
            </View>
            <View style={styles.text}>
              <Text style={styles.text01}>请添加收货地址</Text>
              <Text style={styles.text02}>收货地址仅限小区内</Text>
            </View>
            <View>
              <FontAwesome name={'chevron-right'} size={10} style={{color: 'tomato'}}></FontAwesome>
            </View>
          </View>
        </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  address: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 360,
    height: 80,
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 4
  },
  loctionIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginRight: 20
  },
  text: {
    width: 230
  },
  text01: {
    fontSize: 16,
    marginBottom: 10
  },
  text02: {
    fontSize: 12,
    color: '#999'
  }
})

export default Location
