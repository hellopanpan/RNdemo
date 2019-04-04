import React from "react";
import { View, Text, Modal,Switch, TextInput, TouchableHighlight,StyleSheet, Picker, PickerIOS, TouchableOpacity,  Button} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Api from '../api/index'
export default class LogoTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'java',
      form: {}
    }
  };
  componentWillReceiveProps(props) {
    let form = Object.assign({}, props.form)
    // 转化为文本
    // for (var item in form) {
    //   if (typeof form[item] == 'number') {
    //     form[item] = form[item].toString()
    //   }
    // }
    this.setState({
      form
    })
  };
  changeValue = (key, val) => {
    let form = Object.assign({}, this.state.form, {[key]: val})
    this.setState({form})
  };
  // submit
  _submit = () => {
    let params = this.state.form;
    Api.updateList(params).then(res => {
      alert(res.msg)
    }).catch(e => {
      alert(e)
    })
  };
  _cancel() {
    this.props.changeValue(false)
  };
  render() {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <View style={styles.cont}>
              {/* 关闭按钮 */}
              <TouchableHighlight style={styles.close}
                onPress={() => {
                  this._cancel.call(this)
                }}>
                <Ionicons name={'ios-close'} size={24}></Ionicons>
              </TouchableHighlight>
              <View>
                <Text>{this.state.form.title}</Text>
                <View style={styles.item}>
                  <Text style={styles.itemText}>标题</Text>
                  <TextInput
                    style={styles.inputTopInput}
                    placeholder={'请输入搜索内容'}
                    placeholderTextColor={'#efefef'}
                    maxLength={10}
                    keyboardType={'default'}
                    returnKeyType="next"
                    onChangeText={this.changeValue.bind(this, 'title')}
                    value={this.state.form.title}
                  />
                </View>
                <View style={styles.item}>
                  <Text style={styles.itemText}>类型</Text>
                  <TextInput
                    style={styles.inputTopInput}
                    placeholder={'请输入搜索内容'}
                    placeholderTextColor={'#efefef'}
                    maxLength={10}
                    keyboardType={'numeric'}
                    returnKeyType="next"
                    onChangeText={this.changeValue.bind(this, 'type')}
                    value={this.state.form.type}
                  />
                </View>
                <View style={styles.item}>
                  <Text style={styles.itemText}>Text</Text>
                  <TextInput
                    style={styles.inputTopInput}
                    placeholder={'请输入搜索内容'}
                    placeholderTextColor={'#efefef'}
                    maxLength={10}
                    keyboardType={'default'}
                    returnKeyType="next"
                    onChangeText={this.changeValue.bind(this, 'text')}
                    value={this.state.form.text}
                  />
                </View>
                <View style={styles.item}>
                  <Text style={styles.itemText}>img</Text>
                  <TextInput
                    style={styles.inputTopInput}
                    placeholder={'请输入搜索内容'}
                    placeholderTextColor={'#efefef'}
                    maxLength={10}
                    keyboardType={'default'}
                    returnKeyType="next"
                    onChangeText={this.changeValue.bind(this, 'img')}
                    value={this.state.form.img}
                  />
                </View>
                {/* 提交按钮 */}
                <View style={styles.btnWrap}>
                  <Button
                    onPress={this._submit}
                    title="Submit"
                    color="#3880ff"
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cont: { 
    minHeight: 260, padding: 10, width: 360, 
    borderRadius: 20, backgroundColor: "#fff", 
    color: "blue", alignItems: "center",
    justifyContent: "center",
    position: 'relative'
  },
  close: {
    position: 'absolute', 
    top: -40,
    right: 10,
    backgroundColor: '#999',
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6
  },
  itemText: {
    width: 60,
    textAlign: 'right'
  },  
  inputTopInput: {
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 3,
    height: 26,
    width: 200,
    marginLeft: 5,
    padding: 5
  },
  btnWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})