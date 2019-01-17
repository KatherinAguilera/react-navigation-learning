import React from 'react';
import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import Home from'./src/screens/home';
import Login from'./src/screens/login';
import About from'./src/screens/about';
import Profile from'./src/screens/profile';

//rutas y configuracion
const AppNavigator = createStackNavigator({
  // Home: Home
  Home:Home, Login:Login, Profile:Profile, About:About,
});
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

// export default createAppContainer(AppNavigator);