/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  Text,
  View, TextInput, TouchableOpacity, KeyboardAvoidingView,
  Alert
} from 'react-native';
import { scale, verticalScale } from "../userControl/Scale";
import { connect } from 'react-redux';



class HomeScreen extends Component {
  constructor(props) {
    super(props)
    
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Màn Hình Đăng Nhập</Text>
      </View>
    );
  }
}

export default connect(null, null)(HomeScreen);