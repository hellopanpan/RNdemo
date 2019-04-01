import React from "react";
import { View, Text, Modal, TouchableHighlight, TouchableOpacity,  Button} from "react-native";
import {DrawerActions} from 'react-navigation';
import { WebView }  from 'react-native-webview'
export default class HomeScreen2 extends React.Component {
  static navigationOptions = ({navigation,screenProps}) => ({  
      headerTitle: '企业服务'
  });
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  };
  setModalVisible(visible) {
    console.log(visible);
    this.setState({ modalVisible: visible });
  };
  render() {
    const data = this.props.data || "null";
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <WebView 
          source={{uri: 'https://es6.ruanyifeng.com/'}}
          style={{marginTop: 20}}
        />
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ flex: 1,backgroundColor: "yellow", color: "blue", alignItems: "center", justifyContent: "center" }}>
            <View>
              <Text>Hello World!</Text>
              <TouchableHighlight
                onPress={() => {
                  this.setState({
                    modalVisible:false
                  })
                }}>
                <Text style={{color: 'skyblue'}}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableOpacity>
      </View>
    );
  }
}