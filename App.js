import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// const MainNavigator = createStackNavigator({
//   Home: {screen: HomeScreen},
//   Profile: {screen: ProfileScreen},
// });

// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome',
//   };
//   render() {
//     const {navigate} = this.props.navigation;
//     return (
//       <Button
//         title="Go to Jane's profile"
//         onPress={() => navigate('Profile', {name: 'Jane'})}
//       />
//     );
//   }
// }

// const App = createAppContainer(MainNavigator);

// export default App;
// import { createStackNavigator, createAppContainer } from 'react-navigation-stack';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import UserList from './src/screens/UserLists'
import UserDetails from './src/screens/UserDetails'
const AppNavigator = createStackNavigator({
  UserList: {
    screen: UserList
  },
  UserDetails: {
    screen: UserDetails
  }
})
export default createAppContainer(AppNavigator);