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
// Home:Home,
// Login:Login,
// Profile:Profile,
// About:About,
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      path: 'home/',
      // titulo
      navigationOptions: {
        title: 'Esta es la Home'
      }
    },
    About,
    Profile,
    Login,
  },
  {
    // donde inicia la app
    initialRouteName: 'About',
    defaultNavigationOptions: {
      title: 'Un titulo genérico'
    },
    initialRouteKey: 'login',
    initialRouteParams: {
      nombre: 'Leonidas Esteban'
    }
  }
);
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

// export default createAppContainer(AppNavigator);