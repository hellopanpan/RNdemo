import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
class Addlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      adress: '',
      id: -1
    };
  };
  saveit() {
    if (!(this.state.name && this.state.phone && this.state.adress)) {
      alert('请完善地址')
    } else {
      if (this.state.id >= 0) { // 修改
        this.props.EditList(this.state.id, this.state.name, this.state.phone, this.state.adress)
      } else { //新增
        this.props.addList(this.state.name, this.state.phone, this.state.adress)
      }
      
    }
  };
  componentDidMount() {
    this.setState({
      name: this.props.item.name,
      phone: this.props.item.phone,
      adress: this.props.item.address,
      id: this.props.item.id
    })
  };
  render() {
    return (
        <View style={styles.wrap}>
          <View style={styles.item}>
            <Text style={styles.text01}>收货人：</Text>
            <TextInput
              style={{height: 30, width: 260}}
              maxLength={10}
              placeholder={'亲填写收货人姓名'}
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
            />
          </View>
          <View style={styles.item}>
            <Text style={styles.text01}>电话：</Text>
            <TextInput
              style={{height: 30, width: 260}}
              maxLength={11}
              keyboardType={'numeric'}
              placeholder={'请填收货人电话'}
              onChangeText={(phone) => this.setState({phone})}
              value={this.state.phone}
            />
          </View>
          <View style={styles.item}>
            <Text style={styles.text01}>地址：</Text>
            <TextInput
              style={{height: 30, width: 260}}
              maxLength={30}
              placeholder={'例：四川省成都市高新区中和镇'}
              onChangeText={(adress) => this.setState({adress})}
              value={this.state.adress}
            />
          </View>
          <TouchableOpacity style={styles.save} onPress={this.saveit.bind(this)}>
            <Text style={styles.text03}>保存地址</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 360,
    height: "100%",
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding: 10
  },
  save: {
    marginTop: 20,
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
    borderRadius: 5,
  },
  text01: {
    width: 80,
    color: '#333'
  },
  text03: {
    color: '#fff',
    fontSize: 15
  }
})
export default Addlist;
