import React from "react";
import { View, Text, Modal,Switch, TouchableHighlight,Picker, PickerIOS, TouchableOpacity,  Button} from "react-native";
import {DrawerActions} from 'react-navigation';
import SettingModal from '../components/settingModal'
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
  changeIt(value) {
    this.setState({ modalVisible: value });
  };
  render() {
    const data = this.props.data || "null";
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <SettingModal modalVisible={this.state.modalVisible} changeValue={this.changeIt.bind(this)}></SettingModal>
        <Switch value={this.state.modalVisible} trackColor={{false: 'yellow', true: 'green'}} ios_backgroundColor={'yellow'} onValueChange={(value) => this.setState({modalVisible: value})}></Switch>
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