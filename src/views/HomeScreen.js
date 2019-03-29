import React from "react";
import { View, Text, Button, StyleSheet,FlatList, TouchableOpacity} from "react-native";
import { SafeAreaView } from 'react-navigation';
import * as Api from '../api/index'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyListItem from '../components/IndexListItem'
class LogoTitle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: "flex-start", paddingLeft: 20}}>
        <Text>{this.props.navigation}</Text>
        <Ionicons name={'ios-options'} size={40} onPress={() => this.props.navigationss.toggleDrawer()}></Ionicons>
      </View>
    );
  }
}
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
  _keyExtractor = (item, index) => item._id;
  constructor(props) {
    super(props);
    this.state = {
      flag: 1,
      isShowingText: 0 ,
      movies: [],
      selected: new Map()
    };
  };
  componentDidMount() {
    // get list
    this.getList()
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
  getList() {
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
          <Text>{this.state.flag}</Text>
          <FlatList style={{flex: 1}}
            data={this.state.movies}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
          <Button
            title="Go back Home"
            onPress={() => this.props.navigation.toggleDrawer()}
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