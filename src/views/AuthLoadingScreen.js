import React from "react";
import { View, Text, Button} from "react-native";
export default class App extends React.Component {
  render() {
    return (
      <View  style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>auth loading....</Text>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    )
  }
  _signInAsync = async () => {
    this.props.navigation.navigate('DrawerNavigator');
    // this.props.navigation.openDrawer();
  };
}