import React from "react";
import { View, Text, Modal,Switch, TouchableHighlight,Picker, PickerIOS, TouchableOpacity,  Button} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class LogoTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'java'
    }
    
  }
  render() {
    return (
      <View>
        <Text>{this.props.modalVisible}</Text>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisible}
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
                  this.props.changeValue(false)
                }}>
                <Text style={{color: 'skyblue', textAlign: 'center'}}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}