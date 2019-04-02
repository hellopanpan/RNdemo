import React from "react";
import { View, Text, Modal, TouchableHighlight,Picker, PickerIOS, TouchableOpacity,  Button} from "react-native";
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
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ flex: 1,backgroundColor: "#efefef", color: "blue", alignItems: "center", justifyContent: "center" }}>
            <View>
              <Text style={{textAlign: 'center'}} >Hello World!</Text>
              <View style={{ height: 300, width: 100 }}>
                <PickerIOS
                    selectedValue={this.state.language}
                    itemStyle={{color: 'skyblue'}}
                    style={{ height: 100, width: 100, includeFontPadding: false }}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                  </PickerIOS>
              </View>
              
              <TouchableHighlight
                onPress={() => {
                  this.setState({
                    modalVisible:false
                  })
                }}>
                <Text style={{color: 'skyblue', textAlign: 'center'}}>Hide Modal</Text>
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