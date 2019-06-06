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
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';


class HomeScreen extends Component {
  constructor(props) {
    super(props)

  }

  static navigationOptions = {
    header: null,
  };

  async loginFaceBook() {
    LoginManager.logInWithReadPermissions(["public_profile"]).then(
      function (result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log(
            "Login success with permissions: " +
            result.grantedPermissions.toString()
          );
          console.log(JSON.stringify(result))
        }
      },
      function (error) {
        console.log("Login fail with error: " + error);
      }
    );
  }
  render() {
    return (
      <View>
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")} />
        <TouchableOpacity style={{
          marginTop: 40, height: 50, width: 250, backgroundColor: '#3b5998', justifyContent: 'center',
          alignItems: 'center', borderRadius: 5
        }}
          onPress={() => this.loginFaceBook()}
        >
          <Text style={{ color: 'white', fontSize: 18 }}>Login with Facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(null, null)(HomeScreen);