import React from "react";
import { View, Text, Button} from "react-native";
import AppContainer from './route'
export default class App extends React.Component {
  render() {
    return <AppContainer style={{flex: 1}}/>;
  }
}