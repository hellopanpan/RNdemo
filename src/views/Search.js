
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet , TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.inputTop}>
          <Ionicons name={'ios-search'} size={20} style={styles.inputTopText}></Ionicons>
          <TextInput
            style={styles.inputTopInput}
            autoFocus={true}
            placeholder={'搜索商品'}
            placeholderTextColor={'#999'}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.text01}>确定</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  inputTop: {
    flex: 1,
    height: 34,
    backgroundColor: "#efefef",
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "flex-start"
  },
  inputTopText: {
    color: 'tomato',
    marginRight: 10,
    paddingLeft: 19
  },
  inputTopInput: {
    height: 20,
    borderColor: null , 
    borderWidth:0,
    padding: 0, 
    flex: 1,
    color: '#333'
  },
  text01: {
    fontSize: 16,
    color: '#666',
    width: 50,
    textAlign: 'center'
  }
})
export default Search;
