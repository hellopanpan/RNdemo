import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
class list extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.wrap}>
          <View style={styles.left}>
            <Text style={styles.text01}> 四川成都高新区 </Text>
            <Text style={styles.text02}> 潘潘 18674389364 </Text>
        </View>
        <TouchableOpacity style={styles.right}>
          <FontAwesome name={'pencil-square-o'} size={20}></FontAwesome>
        </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 360,
    backgroundColor: '#efefee',
    padding: 10,
    marginTop: 10
  },
  left: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  right: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text01: {
    fontSize: 14,
    color: '#333'
  },
  text02: {
    fontSize: 13,
    color: '#555'
  }
})
export default list;
