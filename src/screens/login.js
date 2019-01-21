import React, {Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

class Login extends Component {
  handlePress = () => {
      // console.log(this.props.navigation);
    // this.props.navigation.navigate('About')
    this.props.navigation.dispatch(
      NavigationActions.navigate({
        routeName: 'About',
      })
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <Button
          title="Ir About"
          onPress={this.handlePress} 
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Login