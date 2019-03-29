import React from "react";
import { View, Text, Button} from "react-native";
import {DrawerActions} from 'react-navigation';
export default class HomeScreen2 extends React.Component {
  render() {
    const data = this.props.data || "null";
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text >this is for setting page</Text>
        <Button
          title="Go drawer"
          onPress={() => this.props.navigation.navigate('More')}
        />
      </View>
    );
  }
}