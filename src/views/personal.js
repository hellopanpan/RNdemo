import React from "react";
import { View, Image, Text, Modal,Switch, TouchableHighlight,Picker, PickerIOS, TouchableOpacity,  Button} from "react-native";
import {DrawerActions} from 'react-navigation';
import SettingModal from '../components/settingModal';
import ImagePicker from 'react-native-image-crop-picker';
export default class HomeScreen2 extends React.Component {
  static navigationOptions = ({navigation,screenProps}) => ({  
      headerTitle: '企业服务'
  });
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      picSource: require('../assets/images/1.jpg')
    };
  };
  _getPic() {
    ImagePicker.openPicker({
      multiple: true
    }).then(images => {
      console.log(images);
      // alert(images)
      
      this.setState({
        picSource: {uri: images[0].sourceURL}
      })
    });
  };
  render() {
    const data = this.props.data || "null";
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this._getPic.bind(this)}
        >
          <Image
            style={{width: 50, height: 50, borderRadius: 25}}
            source={this.state.picSource}
          />
        </TouchableOpacity>
      </View>
    );
  }
}