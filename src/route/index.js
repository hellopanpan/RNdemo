import React from "react";
import {createStackNavigator,createSwitchNavigator, createDrawerNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../views/Home'
import Setting from '../views/Setting'
import Detail from '../views/Detail'
import AuthLoadingScreen from '../views/AuthLoadingScreen'
import Shop from '../views/Shop'
import Draw from '../views/draw'
import Person from '../views/personal'
import Video from '../views/videoNew'
import shopComfirm from '../views/shopComfirm'
import shopDetail from '../views/shopDetail'
import my from '../views/My'
import search from '../views/Search'
import order from '../views/Order'
import payOk from '../views/PayOk'
import Adress from '../views/Adress'
import Location1 from '../views/Location'
// 一般stack
const HomeStack = createStackNavigator({
  Home: HomeScreen,
    Details: {
      screen: Detail,
      navigationOptions: () => ({
        title: `A`,
        headerBackTitle: 'A much',
      }),
    }
  },
  {
    mode: 'card',
    headerMode: 'none',
  }
);
const SettingStack = createStackNavigator({
    Setting: Setting
});
// 超市
 const PageStack = createStackNavigator({
    
    Shop: Shop,
    Order: order,
    ShopComfirm: shopComfirm,
    ShopDetail: shopDetail,
    Search: search,
    PayOk: payOk,
    My: my,
    Adress: Adress,
    Location: Location1,
    
 })
// tab
const TabNavigator = createBottomTabNavigator({
  HomeTab: {
    screen: HomeStack,
    navigationOptions:({navigation}) => ({
      tabBarLabel:'我的首页'
    })
  },
  Video: {
    screen: Video,
    navigationOptions:({navigation}) => ({
      tabBarLabel:'Shot video'
    })
  },
  Person: {
    screen: Person,
    navigationOptions:({navigation}) => ({
      tabBarLabel:'Person'
    })
  },
  Settings: {
    screen: SettingStack,
    navigationOptions:({navigation}) => ({
      tabBarLabel:'Setting'
    })
  },
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'HomeTab') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        // Sometimes we want to add badges to some icons. 
        // You can check the implementation below.
        // IconComponent = HomeIconWithBadge; 
      } else if (routeName === 'Settings') {
        iconName = `ios-options`;
      } else if (routeName === 'Pages'){
        iconName = `ios-cube`;
      } else if (routeName == 'Person') {
        iconName = 'ios-contact'
      } else if (routeName == 'Video') {
        iconName = 'ios-flame'
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    swipeEnabled: true,
    animationEnabled: true,
    style: { // 整体TabBar的样式
      backgroundColor: "rgba(0,0,0,0.1)",
      height: 54,
      left: 0
    }
  },
});

// 抖音
const douStack = createStackNavigator({
    
  Video: {
    screen: Video,
    navigationOptions:({navigation}) => ({
      tabBarLabel:'Shot video'
    })
  },
  
})
// 抽屉导航
const DrawerNavigator = createDrawerNavigator(
  { 
    Dou: {
      screen: douStack,
      navigationOptions:({navigation}) => ({
        title: '抖音',
        drawerIcon: ({ tintColor }) => (
          <Ionicons name={'ios-information-circle'} size={24}></Ionicons>
        )
      }),
    },
    PageDraw: {
      screen: PageStack,
      navigationOptions:({navigation}) => ({
        drawerLabel:'附近超市',
        drawerIcon: ({ tintColor }) => (
          <Ionicons name={'ios-information-circle'} size={24}></Ionicons>
        ),
      })
    },
    Home: {
      screen: TabNavigator,
      navigationOptions:({navigation}) => ({
        drawerLabel:'多彩生活',
        drawerIcon: ({ tintColor }) => (
          <Ionicons name={'ios-information-circle'} size={24}></Ionicons>
        ),
      })
    },
    
  },
  {
    // contentComponent: Me,   
    //用于覆盖抽屉中的组件
    drawerWidth : 200,
    contentOptions: {
      activeTintColor: '#e91e63',
    }
  }
)
// 首屏导航
export default AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    DrawerNavigator: DrawerNavigator
  },
  {
    initialRouteName: 'DrawerNavigator',
  }
));