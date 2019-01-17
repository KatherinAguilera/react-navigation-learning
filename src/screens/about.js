import React, {Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


class About extends Component {
  handlePress = () => {
    this.props.navigation.navigate('Profile')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>About</Text>
        <Button
          title="Ir Profile"
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
export default About