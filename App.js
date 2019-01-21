import React from 'react';

import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import Home from'./src/screens/home';
import Login from'./src/screens/login';
import About from'./src/screens/about';
import Profile from'./src/screens/profile';
import { Text } from 'react-native';
import { blue } from 'ansi-colors';

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
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: 'Un titulo genérico',
      headerTitleAllowFontScaling: true,
      headerBackTitle: 'Atras',
      //ir hacia atras
      gesturesEnabled: true,
      headerTintColor: 'peru',
      headerBackImage: <Text>{`<=`}</Text>,
      // headerBackground: 'black',
      // header: <Text style={{color: 'white'}}>esto es un header</Text>,
    },
    initialRouteKey: 'login',
    initialRouteParams: {
      name: 'Leonidas Esteban'
    },
    // headerMode: float screen none
    // headerMode: 'screen',
    // mode: modal card
    mode: 'card',
    cardStyle: {
      borderWidth: 2,
      backgroundColor: 'red'
    },
    // headerTransitionPreset: 'fade-in-place' 'uikit'
    headerTransitionPreset: 'uikit',
  }
);
const AppContainer = createAppContainer(AppNavigator);

const Main = createStackNavigator(
  {
    Main: {
      screen: AppContainer
    },
    Login: {
      screen: Login,
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
)
// export default Main;

// export default createAppContainer(AppNavigator);
export default createAppContainer(Main);
