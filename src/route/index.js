import React from "react";
import {createStackNavigator,createSwitchNavigator, createDrawerNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../views/HomeScreen'
import Setting from '../views/Setting'
import Detail from '../views/Detail'
import AuthLoadingScreen from '../views/AuthLoadingScreen'
import Pages from '../views/Pages'
import Draw from '../views/draw'
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
// tab
const TabNavigator = createBottomTabNavigator({
  HomeTab: {
    screen: HomeStack,
    navigationOptions:({navigation}) => ({
      tabBarLabel:'我的首页'
    })
  },
  Settings: {
    screen: SettingStack,
    navigationOptions:({navigation}) => ({
      tabBarLabel:'Setting'
    })
  },
  Pages: {
    screen: Pages,
    navigationOptions:({navigation}) => ({
      tabBarLabel:'Pages'
    })
  }
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
      } else {
        iconName = `ios-information-circle`;
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    swipeEnabled: true,
    animationEnabled: true
  },
});

// 抽屉导航
const DrawerNavigator = createDrawerNavigator(
  { 
    Home: {
      screen: TabNavigator,
      navigationOptions:({navigation}) => ({
        drawerLabel:'我上搜索',
        drawerIcon: ({ tintColor }) => (
          <Ionicons name={'ios-information-circle'} size={24}></Ionicons>
        ),
      })
    },
    draw: {
      screen: Draw,
      navigationOptions:({navigation}) => ({
        title: '11111'
      })
    }
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
    initialRouteName: 'AuthLoading',
  }
));