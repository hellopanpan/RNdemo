import React from "react";
import { View, Text, Modal,Switch, TouchableHighlight,StyleSheet, Picker, PickerIOS, TouchableOpacity,  Button} from "react-native";
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
          animationType="fade"
          transparent={true}
          visible={this.props.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <View style={styles.cont}>
              <TouchableHighlight style={styles.close}
                onPress={() => {
                  this.props.changeValue(false)
                }}>
                <Ionicons name={'ios-close'} size={24}></Ionicons>
              </TouchableHighlight>
              <View>
                {this.props.children}
              </View>
              
            </View>
          </View>
          
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cont: { 
    minHeight: 260, padding: 10, width: 360, 
    borderRadius: 20, backgroundColor: "#fff", 
    color: "blue", alignItems: "center",
    justifyContent: "center",
    position: 'relative'
  },
  close: {
    position: 'absolute', 
    top: -40,
    right: 10,
    backgroundColor: '#999',
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  }
})