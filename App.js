import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Demo from './dev/demo';


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <Demo />
      </View>
    );
  }
}

export default App;