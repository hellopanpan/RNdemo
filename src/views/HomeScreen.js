import React from "react";
import { View, Text, Button, StyleSheet,FlatList, Image, TouchableOpacity} from "react-native";
import { SafeAreaView } from 'react-navigation';
import Swiper from 'react-native-swiper';
import * as Api from '../api/index'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyListItem from '../components/IndexListItem'
import LogoTitle from '../components/logoTitle'
export default class HomeScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'nihao',
  //   headerBackTitle: 'A much',
  //   headerLeft: <LogoTitle ></LogoTitle>
  // };
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
      isShow: false,
      items:[]
    };
  };
  _keyExtractor = (item, index) => item._id;
  componentDidMount() {
    // get list
    this._getList()
    this._getPic()
  };
  // get pic
  _getPic = () => {
    var item;
    for (let i = 0; i < 3; i++){
        switch (i){
            case 0:{
                item = 'http://blogdailyherald.com/wp-content/uploads/2013/04/382065_560557460633306_930109857_n.jpg';

                break;
            }
            case 1:{
                item = 'http://img0.pclady.com.cn/pclady/pet/choice/cat/1701/6.jpg';
                break;
            }
            default:{
                item = 'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/3812b31bb051f819dc048662dbb44aed2e73e7f1.jpg';
                break;
            }
        }
        this.state.items.push(item);

    }
    console.log(this.state.items + '111');
    this.setState({
        isShow: true,
        items: this.state.items
    })
  }
  // 引用list item
  _renderItem = ({item}) => (
    <MyListItem
      id={item._id}
      item={item}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item._id)}
      title={item.title}
    />
  );
  // 选择切换
  _onPressItem = (id) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  }
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
  }
  // 轮播图
  _getSwiper() {
    let swperStr = null;
    let ScreenWidth = 375;
    let H = 199;
    if (this.state.isShow) {
      swperStr = <Swiper autoplay = {false} showsPagination = {true} dotColor="white"
        activeDotColor='yellow' horizontal={true}>
          {
            this.state.items.map((item, index) => {
              console.log(item, index)
              //cover: 等比例放大; center:不变; contain:不变; stretch:填充;
              return (
                <View key = {index} style={{flex: 1, position: 'relative',justifyContent: "flex-start"}}>
                  <Image style={{flex: 1}}  resizeMode='cover' source={{uri: item}}/>
                </View>    
              )
            })
          }
      </Swiper>
    } else {
      swperStr = <View style={{height:H, width: ScreenWidth, backgroundColor:'green'}}/>
    };
    return swperStr
  }
  render() {
    const data = this.props.data || "null";
    let swperStr = this._getSwiper()
    return (
      <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          {swperStr}
          <FlatList style={{flex: 1}}
            data={this.state.movies}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
          <Button
            title="Go back go detail"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      </SafeAreaView>
    );
  }
}