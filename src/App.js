import React from "react";
import { View, Text, Button} from "react-native";
import AppContainer from './route'
import reducer from "./store/reducer"
import { createStore } from 'redux';
import	{Provider} from "react-redux"
let store = createStore(reducer);
export default class App extends React.Component {
  render() {
    return <Provider store={store}>
      <AppContainer />
    </Provider>;
  }
}