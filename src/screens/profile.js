import React, {Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


class Profile extends Component {
  handlePress = () => {
    this.props.navigation.navigate('Home')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        <Button
          title="Ir a Home"
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
export default Profile