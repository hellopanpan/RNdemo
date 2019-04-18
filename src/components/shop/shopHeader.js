import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
class shopHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{display: 'flex', flexDirection: 'row', paddingLeft: 10,marginTop: 10}}>
        <View style={styles.top} >
          <Ionicons style={styles.topIcon} name={'ios-pin'} size={28}></Ionicons>
          <Text style={styles.topText}>天府软件园G区</Text>
          <Ionicons name={'ios-arrow-down'} size={24}></Ionicons>
        </View>
        <View style={styles.inputTop}>
          <Ionicons name={'ios-search'} size={20} style={styles.inputTopText}></Ionicons>
          <TextInput
            style={styles.inputTopInput}
            placeholder={'请输入搜索内容'}
            placeholderTextColor={'#efefef'}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>
      </View>
    );
  }
}

export default shopHeader;
const styles = StyleSheet.create({
  left: {
    width: 90, height: '100%',
    backgroundColor: 'gray'
  },
  right:{
    backgroundColor: '#ededed',
    flex: 1
  },
  top: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "flex-start",
    width: 160,
    height: 40
  },
  topIcon: {
    color: '#3880ff'
  },
  topText: {
    paddingLeft: 10,
    paddingRight: 10
  },
  inputTop: {
    height: 40,
    minWidth: 200,
    backgroundColor: "#999",
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10
  },
  inputTopText: {
    color: '#fff',
    marginRight: 10,
    paddingLeft: 10
  },
  inputTopInput: {
    height: 20,
    borderColor: null , 
    borderWidth:0,
    padding: 0, 
    flex: 1,
    color: '#fff'
  }
})
