import React from "react";
import { View, Text, Button} from "react-native";
import AppContainer from './route'
import reducer from "./store/reducer"
import { createStore } from 'redux';
import	{Provider} from "react-redux"
import MyLoading from "./components/MyLoading";

let store = createStore(reducer);
export default class App extends React.Component {
  render() {
    return <Provider store={store}>
      <View style={{flex : 1}}>
        <AppContainer />
        {<MyLoading
            ref={(ref) => {
                global.mLoadingComponentRef = ref;
            }}
        />}
      </View>
    </Provider>;
  }
}