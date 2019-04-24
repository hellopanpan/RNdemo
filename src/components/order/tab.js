import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: ['待付款', '已付款', '已完成', '取消'],
      select: 0
    };
  }

  render() {
    return (
      <View style={styles.tab}>
        { 
          this.state.tabs.map((item, index) => {
            return <TouchableOpacity onPress={() => {this.setState({select: index})}} style={[styles.item, this.state.select == index ? styles.active : null]} key={index}>
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          })
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tab: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40
  },
  item: {
    height: 40,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    borderBottomColor: 'tomato',
    borderBottomWidth: 1,
  },
  text: {
    color: '#333',
    fontSize: 14
  }
})
export default Tab;
