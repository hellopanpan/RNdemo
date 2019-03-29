import React from "react";
import { View, Text, Button} from "react-native";
import {DrawerActions} from 'react-navigation';
export default class HomeScreen2 extends React.Component {
  static navigationOptions = ({navigation,screenProps}) => ({  
      headerTitle: '企业服务'
  });
  render() {
    const data = this.props.data || "null";
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text >this is for setting page</Text>
        <Button
          title="Go drawer"
          onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      </View>
    );
  }
}