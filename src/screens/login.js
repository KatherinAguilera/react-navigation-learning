import React, {Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


class Login extends Component {
  handlePress = () => {
    this.props.navigation.navigate('About')
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