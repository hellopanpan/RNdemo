import React from "react";
import { View, Text, Button, StyleSheet,FlatList, TouchableOpacity} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
 
// 每一条
class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };
  _edit = (id) => {
    this.props.openModel(true)
  };
  render() {
    const textColor = this.props.selected ? "skyblue" : "black";
    return (
        <View style={styles.flexRow} >
          <TouchableOpacity onPress={this._onPress}>
            <Ionicons name={"ios-checkbox"} size={26} style={{ color: textColor }}></Ionicons>
          </TouchableOpacity>
          <Text style={[styles.text1,{flexWrap:'wrap'}]} numberOfLines={1}>
            {this.props.item.title}
          </Text>
          <Text style={[styles.text1,{flexWrap:'wrap'}]} numberOfLines={1}>
            {this.props.item.text}
          </Text>
          <Text style={[styles.text1,{flexWrap:'wrap'}]} numberOfLines={1}>
            {this.props.item.img}
          </Text>
          <Text style={[styles.text1,{flexWrap:'wrap'}]} numberOfLines={1}>
            {this.props.item.learn}
          </Text>
          <TouchableOpacity onPress={this._edit.bind(this, this.props.item._id)}>
            <Text style={[styles.text1,{flexWrap:'wrap', color: 'skyblue'}]} numberOfLines={1}>
              编辑
            </Text>
          </TouchableOpacity>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  flexRow: {
    width: 375,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
  },
  text1: {
    color: '#666',
    paddingLeft: 10,
    width: 60,
    flexDirection: 'row',
    flexWrap: 'nowrap'
  }
});

//  列表
export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: new Map()
    }
  };
   // 选择切换
   _onPressItem = (id) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };
  render() {
    return (
      <View style={{height: 250}}>
      <FlatList 
        data={this.props.movies}
        extraData={this.props}
        keyExtractor={(item, index) => item._id}
        renderSectionHeader={({item}) => <Text >{item.title}</Text>}
        renderItem={({item}) => 
          <MyListItem
            id={item._id}
            item={item}
            onPressItem={this._onPressItem}
            selected={!!this.state.selected.get(item._id)}
            title={item.title}
            openModel={this.props.openModel}
          />}
      />
    </View>
    )
  }
}