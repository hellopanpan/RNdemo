import Reactotron from 'reactotron-react-native'

Reactotron
  .configure({
    host: '172.20.33.3',
    name: 'BlackCard Debug'
  })
  .useReactNative({
    editor: false
  })
  .connect()
