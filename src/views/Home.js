import React from "react";
import { View, Text, Button, Switch,ScrollView, Picker, StyleSheet,TextInput, FlatList, SectionList, Image, TouchableOpacity} from "react-native";
import { SafeAreaView } from 'react-navigation';
import {connect} from "react-redux"
import * as Api from '../api/index'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyListItem from '../components/IndexListItem';
import SwiperHome from '../components/swiperHome';
import LogoTitle from '../components/logoTitle';
import SwiperHomeTab from '../components/swiperHomeTab'
import EditModal from '../components/editModel'

class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'nihao',
    headerBackTitle: 'A much',
    headerLeft: <LogoTitle navigationss={navigation}></LogoTitle>
  });
  constructor(props) {
    super(props);
    this.state = {
      flag: 1,
      isShowingText: 0 ,
      movies: [],
      selected: new Map(),
      text: '', 
      modalVisible: false,
      switch: true
    };
  };
  componentDidMount() {
    // get list
    this._getList()
  };
  // 获取list 数据
  _getList = () => {
    let params = {
      page: 1,
      rows: 10
    }
    Api.getList(params).then(res => {
      let movies = res.list;
      console.log(movies)
      this.setState({
        movies: movies
      })
    }).catch(e => {
      console.log('-----1133311-----')
    })
  };
  // 打开弹窗
  _openModel(value) {
    this.setState({ modalVisible: value });
  };
  // 关闭弹窗
  _changeIt(value) {
    this.setState({ modalVisible: value });
  };
  render() {
    const data = this.props.data || "null";
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
        <View style={{ padding: 10}}>
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
            <View style={{marginTop: 10}}>
              <SwiperHome />
            </View>
            <View style={{marginTop: 10}}>
              <SwiperHomeTab />
            </View>
            <View style={{marginTop: 10}}>
              <MyListItem movies={this.state.movies} openModel={this._openModel.bind(this)}></MyListItem>
            </View>
          </View>
        </ScrollView>
        <EditModal modalVisible={this.state.modalVisible} changeValue={this._changeIt.bind(this)}>
          <Text style={{textAlign: 'center'}} onPress={this._alert}>Hello World!</Text>
        </EditModal>
      </SafeAreaView>  
    );
  }
}
export default connect((state,props)=>{
  return state
})(HomeScreen);

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "flex-start",
    width: '100%',
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
    width: '100%',
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