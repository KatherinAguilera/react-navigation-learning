import React, {Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackActions } from 'react-navigation';

class Home extends Component {
  // funcion para onPress
  handlePress = () => {
    this.props.navigation.dispatch(StackActions.push({
      routeName: 'Login',
    }))
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          title="Login"
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
export default Home;