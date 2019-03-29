import React from "react";
import { View, Text, Button, StyleSheet,FlatList, TouchableOpacity} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    const textColor = this.props.selected ? "skyblue" : "black";
    return (
      <TouchableOpacity onPress={this._onPress} style={{flex: 1}}>
        <View style={styles.flexRow} >
          <Ionicons name={"ios-checkbox"} size={26} style={{ color: textColor }}></Ionicons>
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
          <Text style={[styles.text1,{flexWrap:'wrap'}]} numberOfLines={1}>
            {this.props.item.good}
          </Text>
        </View>
      </TouchableOpacity>
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
    paddingLeft: 10,
    height: 40
  },
  text1: {
    color: '#666',
    paddingLeft: 10,
    width: 60,
    flexDirection: 'row',
    flexWrap: 'nowrap'
  }
})