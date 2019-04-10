
import React from "react";
import {connect} from "react-redux"
import { View, Text, Button,Dimensions, StyleSheet,FlatList, TouchableOpacity} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
// 每一条
class MyListItem extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      selectIndex: 0,
      paused: false
    }
  }
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };
  _edit = (item) => {
    this.props.openModel(true, item)
  };
  setTime(e) {
    // console.log(e)
    let progress = e.currentTime / e.playableDuration * 100
    this.setState({progress})
  };
  render() {
    const textColor = this.props.selected ? "skyblue" : "black";
    var {height, width} = Dimensions.get('window');
    return (
        <View style={[styles.flexRow,{height: height - 45}]} >
          <Video
            source={this.props.item.source}
            ref={(ref) => {
              this.player = ref
            }}
            resizeMode="cover" 
            paused={ true}
            repeat={true}                                   // Store reference
            onBuffer={this.onBuffer}                // Callback when remote video is buffering
            onError={this.videoError}               // Callback when video cannot be loaded
            style={styles.backgroundVideo}   // [iOsS]进度控制，每250ms调用一次，以获取视频播放的进度
            progressUpdateInterval={250.0}
            onProgress={this.setTime.bind(this)} 
            volume={this.state.volume}
            playInBackground={true} 
          />
        </View>
    );
  }
}
const styles = StyleSheet.create({
  flexRow: {
    width: 375,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    backgroundColor:'red'
  },
  text1: {
    color: '#666',
    paddingLeft: 10,
    width: 60,
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
  backgroundVideo: {
    position: 'absolute',
    backgroundColor: 'green',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});

//  列表
class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: new Map(),
      movies: [{
        _id: "1111", 
        title: '1111',
        source: require('../assets/images/2.mp4')
      },
      {
        _id: '1122', 
        title: '1112222',
        source: require('../assets/images/3.mp4'),
      }]
    }
  };
   // 选择切换
   _onPressItem = (id) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };
  render() {
    return (
      <View style={{height: '100%',backgroundColor: 'green'}}>
      <FlatList 
        style={{height: '100%',backgroundColor: 'gray'}}
        data={this.state.movies}
        extraData={this.state}
        keyExtractor={(item, index) => item._id}
        renderItem={({item}) => 
          <MyListItem
            style={{height: '100%'}}
            id={item._id}
            item={item}
            onPressItem={this._onPressItem}
            selected={!!this.state.selected.get(item._id)}
            title={item.title}
            openModel={this.props.openModel}
          />}
      />
    </View>
    )
  }
}
export default connect((state, props) => {return state })(ListItem);