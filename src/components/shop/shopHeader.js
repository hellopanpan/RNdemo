import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput , TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
          <FontAwesome style={styles.topIcon} name={'map-marker'} size={28}></FontAwesome>
          <Text style={styles.topText} numberOfLines={1} ellipsizeMode="tail" >天府软件园G区3栋7楼</Text>
          {/* <Ionicons name={'ios-arrow-down'} size={22} style={{color: '#999'}}></Ionicons> */}
        </View>
        <TouchableOpacity onPress={this.props.goSearch}>
          <View style={styles.inputTop}>
            <Ionicons name={'ios-search'} size={20} style={styles.inputTopText}></Ionicons>
            <Text style={styles.inputTopInput}> 搜索商品</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.goMy}>
          <View style={styles.person}>
            <Ionicons name={'ios-person'} size={22} style={{height: 22, color: 'tomato'}} ></Ionicons>
            <Text style={styles.text03}>我的</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default shopHeader;
const styles = StyleSheet.create({
  left: {
    width: 90, height: '100%',
    backgroundColor: '#fff'
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
    color: 'tomato'
  },
  topText: {
    paddingLeft: 5,
    paddingRight: 3,
    maxWidth: 140
  },
  inputTop: {
    height: 34,
    minWidth: 150,
    paddingTop: 3,
    backgroundColor: "#fff",
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: "center",
    borderWidth: 1,
    borderColor: '#cccc',
    justifyContent: "center"
  },
  inputTopText: {
    color: '#999',
    marginRight: 10,
    paddingLeft: 19
  },
  inputTopInput: {
    height: 20,
    borderColor: null , 
    borderWidth:0,
    padding: 0, 
    flex: 1,
    color: '#999'
  },
  person: {
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    marginLeft: 5
  },
  text03: {
    fontSize: 12,
    color: '#666'
  }
})
