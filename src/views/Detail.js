import React from "react";
import { View, Text, Button} from "react-native";
export default class Detail extends React.Component {
  render() {
    const data = this.props.data || "null";
    const itemId = this.props.navigation.getParam('itemId', 'NO-ID');
    const otherParam = this.props.navigation.getParam('otherParam', 'some default value');
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text >this is detai page</Text>
        <Text>{itemId}</Text>
        <Text>{otherParam}</Text>
        <Button
          title="Go back Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}