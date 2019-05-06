import React, { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { 
  View, 
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={styles.cont}>
        <TouchableOpacity style={[styles.activeT, styles.item]}>
          <Text style={[styles.text01, styles.active]}> 首页 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text01}> 关注 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.center}>
          <FontAwesome name={'plus-square'} size={22} style={{color: '#fff', transform: [{scaleX: 1.5}]}}></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text01}> 消息 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text01}> 我 </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cont: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  text01: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
    opacity: 0.8
  },
  center: {
    height: 40,
    width: 60,
    justifyContent: 'center', alignItems: 'center',
    
  },
  active: {
    fontWeight: "600",
    fontSize: 18
  },
  activeT: {
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
  }
})
export default componentName;
