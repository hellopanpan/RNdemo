import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import List from '../components/adress/list'
import AddList from '../components/adress/addList'
import {connect} from "react-redux"
class Adress extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '地址列表'
  })
  constructor(props) {
    super(props);
    this.state = {
      editflag: false,
      item: {}
    };
  }
  addList(name, phone, address) {
    this.props.dispatch({
      type: 'ADDADDRESS',
      address: {
        name,
        phone,
        address
      }
    })
    this.setState({
      editflag: false
    })
  };
  EditList(id, name, phone, address) {
    this.props.dispatch({
      type: 'UPDATEADDRESS',
      address: {
        id,
        name,
        phone,
        address
      }
    })
    this.setState({
      editflag: false
    })
  };
  editit(item) {
    this.setState({
      editflag: true,
      item
    })
  };
  addNew() {
    this.setState({
      editflag: true,
      item: {id: -1}
    })
  };
  // 选取地址
  selectAddress(item) {
    this.props.dispatch({
      type: 'SELECTADDRESS',
      address: item
    })
    //if(!(this.props.navigation.getParam('page', false))){
    this.props.navigation.goBack()
    
  };
  render() {
    let edit = null;
    if (this.props.address.length == 0 || this.state.editflag) {
      edit = <View style={styles.edit} >
        <AddList addList={this.addList.bind(this)} EditList={this.EditList.bind(this)} item={this.state.item}></AddList>
      </View>
    }
    return (
      <View style={styles.wrap}>
        <List list={this.props.address} editit={this.editit.bind(this)} selectAddress={this.selectAddress.bind(this)}></List>
        <TouchableOpacity style={styles.addbtn} onPress={() => {this.addNew.bind(this)()}}>
          <Text style={{color: 'tomato'}}>新增地址</Text>
        </TouchableOpacity>
        {edit}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    height: "100%",
  },
  addbtn: {
    marginTop: 20
  },
  edit: {
    width: "100%",
    height: "100%",
    backgroundColor: '#efefef',
    padding: 10,
    position: 'absolute',
    top: 0,
    left: 0
  }
})
export default connect((state,props)=>{
  return state
})(Adress);
