import React from 'react';  
import { StyleSheet, View, Text } from 'react-native';
import Main from './src/Main';
import { Provider } from 'react-redux';
import store from './src/store';
export default class App extends React.Component {
  
  render() {
    return (
        <View style={styles.container}>
          <Text>Screen App</Text>
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