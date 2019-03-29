
// const App = () => {
//   return (
//     <Router >
//       <Scene hideNavBar tabBarPosition="bottom">
//         <Tabs
//           key="tabbar"
//           swipeEnabled
//           wrap={false}
//           // 是否显示标签栏文字
//           showLabel={true}
//           tabBarStyle={{backgroundColor: "#eee"}}
//           //tab选中的颜色
//           activeBackgroundColor="yellow"
//           //tab没选中的颜色
//           inactiveBackgroundColor="#000"
//         >
//           <Scene key="scarlet"
//             component={HomeScreen}
//             title="Scarlet"
//             initial
//           />
//           <Scene
//             key="gray"
//             component={HomeScreen2}
//             title="Gray"
//           />
//           <Scene
//             key="gray3"
//             component={HomeScreen2}
//             title="Gray33333"
//           />
//         </Tabs>
//       </Scene>
//     </Router>
//   );
//   }
// const AppNavigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Details: HomeScreen2
//   },
//   {
//     initialRouteName: "Home"
//   }
// ) 