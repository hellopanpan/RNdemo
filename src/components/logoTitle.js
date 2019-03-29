import React from "react";
import { View, Text, Button, StyleSheet} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class LogoTitle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: "flex-start",  paddingLeft: 20}}>
        <Ionicons name={'ios-options'} size={20} onPress={() => this.props.navigationss.toggleDrawer()}></Ionicons>
      </View>
    );
  }
}