import React from "react";
import { View, Text, Button, Picker, Image, StyleSheet} from "react-native";
import Swiper from 'react-native-swiper';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isShow: false,
      items:[]
    };
  }
  render() {
    let ScreenWidth = 375;
    let H = 699;
    if (this.state.isShow) {
      return(
        <View style={{flex: 1, alignItems:'center', backgroundColor:'#fff'}}>
            <Swiper autoplay = {false} showsPagination = {true} dotColor="white"
              activeDotColor='yellow' horizontal={true}>
                {
                  this.state.items.map((item, index) => {
                    console.log(item, index)
                    //cover: 等比例放大; center:不变; contain:不变; stretch:填充;
                    return (
                      <View key = {index} style={{flex: 1, position: 'relative',justifyContent: "flex-start"}}>
                        <Image style={{flex: 1}}  resizeMode='cover' source={{uri: item}}/>
                        <Text style={styles.btn} onPress={() => this._signInAsync.call(this)}>开启App之旅</Text>
                      </View>    
                    )
                  })
                }
            </Swiper>
            <Button title="Sign in!" onPress={this._signInAsync.bind(this)} />
            <Text style={{fontSize: 40}} onPress={() => this._signInAsync.call(this)}>1111</Text>
        </View>
      );
    }else {
      return(
        <View style={{height:H, width: ScreenWidth, backgroundColor:'green'}}/>
      );
    }
  }
  componentDidMount() {
    var item;
    for (let i = 0; i < 3; i++){
        switch (i){
            case 0:{
                item = 'http://blogdailyherald.com/wp-content/uploads/2013/04/382065_560557460633306_930109857_n.jpg';

                break;
            }
            case 1:{
                item = 'http://img0.pclady.com.cn/pclady/pet/choice/cat/1701/6.jpg';
                break;
            }
            default:{
                item = 'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/3812b31bb051f819dc048662dbb44aed2e73e7f1.jpg';
                break;
            }
        }
        this.state.items.push(item);

    }
    console.log(this.state.items + '111');
    this.setState({
        isShow: true,
        items: this.state.items
    })
  };
  _signInAsync(){
    // alert(this.props.navigation)
    this.props.navigation.navigate('DrawerNavigator');
    // this.props.navigation.openDrawer();
  };
}
const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    width: "100%",
    bottom: 60, 
    textAlign: 'center',
    color: '#fff', 
    fontSize: 20
  }
})