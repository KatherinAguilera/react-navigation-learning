import React, {Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// funcion para onPress

class Home extends Component {
  handlePress = () => {
    this.props.navigation.navigate('Login')
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