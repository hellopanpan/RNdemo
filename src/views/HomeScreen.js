import React from "react";
import { View, Text, Button, StyleSheet,FlatList, Image, TouchableOpacity} from "react-native";
import { SafeAreaView } from 'react-navigation';
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
      selected: new Map()
    };
  };
  _keyExtractor = (item, index) => item._id;
  componentDidMount() {
    // get list
    this._getList()
  };
  
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
  
  render() {
    const data = this.props.data || "null";
    return (
      <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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