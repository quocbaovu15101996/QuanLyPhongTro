import React, { FunctionComponent, useEffect } from "react";
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  Pressable,
  Platform,
  SafeAreaView,
  DevSettings,
} from "react-native";
import FastImage from "react-native-fast-image";
import { LoginOptions } from "../../components/login/LoginOptions";
import TextField from "../../components/login/TextField";
import { startApp } from "../../libs/navigation/Utils";
import { textPrimary } from "../../styles/text.styles";
import { AccessToken, LoginManager } from "react-native-fbsdk-next";
import { DataBase } from "../../libs/sqlite";

const Login: FunctionComponent = () => {
  const createTable = () => {
    DataBase.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS " +
          "Rooms " +
          "(ID INTEGER PRIMARY KEY AUTOINCREMENT, RoomName TEXT, Roomer TEXT);"
      );
    });
  };

  useEffect(() => {
    createTable();
  }, []);

  const onPressSignIn = async () => {
    startApp();
  };

  const onPressFacebook = async (): Promise<void> => {
    try {
      LoginManager.logOut();
      const loginResult = await LoginManager.logInWithPermissions([
        "email",
        "public_profile",
      ]);
      if (loginResult.isCancelled) {
        console.log("Login cancelled");
      } else {
        const user = await AccessToken.getCurrentAccessToken();
        console.log(user);
      }
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <>
      <StatusBar translucent hidden={true} />
      <SafeAreaView style={styles.flex1}>
        <View style={styles.content}>
          <Text style={[textPrimary, styles.textSignIn]}>Sign in</Text>
          <Text style={[textPrimary, styles.textGuide]}>
            Please sign in to continue
          </Text>

          <TextField
            onChangeText={() => {}}
            style={styles.textEmail}
            textInputProps={{
              placeholder: "Phone number",
              keyboardType: "numeric",
            }}
            leftIcon={
              <FastImage
                source={require("../../../asset/login/userIcon.png")}
                style={styles.iconUser}
              />
            }
          />
          <TextField
            onChangeText={() => {}}
            style={styles.textPassword}
            textInputProps={{
              placeholder: "Password",
            }}
            leftIcon={
              <FastImage
                source={require("../../../asset/login/passwordIcon.png")}
                style={styles.iconUser}
              />
            }
            rightIcon={
              <FastImage source={require("../../../asset/login/eyeIcon.png")} />
            }
          />
          <View style={styles.viewTick}>
            <View style={styles.viewForgotPassword} />
            <Text style={[textPrimary, styles.flex1]}>Remember me</Text>
            <Text style={[textPrimary]}>Forgot your password?</Text>
          </View>
          <Pressable onPress={onPressSignIn} style={styles.btnSignIn}>
            <Text style={[textPrimary, styles.textSignInFooter]}>SIGN IN</Text>
          </Pressable>
        </View>
        <View style={styles.footer}>
          <Text style={textPrimary}>Or Sign in with</Text>
          <LoginOptions onPressFacebook={onPressFacebook} />
          <Text style={[textPrimary, styles.textSuggest]}>
            Don’t have an account yet?{" "}
            <Text style={[textPrimary, styles.textSignUp]}>SIGN UP</Text>
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    backgroundColor: "#25273D",
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  iconLogo: {
    height: 55,
    width: 55,
    marginTop: 80,
  },
  textSignIn: {
    fontWeight: "900",
    fontSize: 23,
    lineHeight: 30,
    marginTop: 24,
    marginBottom: 9,
  },
  textGuide: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
  },
  btnSignIn: {
    marginTop: 46,
    width: "100%",
    height: 45,
    backgroundColor: "#BDCFFF",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 2 },
        shadowColor: "rgba(98, 120, 241, 0.5)",
        shadowOpacity: 0.5,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  textEmail: {
    marginTop: 60,
    paddingHorizontal: 14,
  },
  textPassword: {
    marginTop: 10,
    paddingHorizontal: 14,
  },
  iconUser: {
    marginRight: 9,
  },
  textSignInFooter: {
    lineHeight: 16,
    color: "#5073F2",
    fontWeight: "bold",
  },
  textSuggest: {
    marginTop: 20,
  },
  footer: {
    paddingHorizontal: 10,
    alignItems: "center",
    paddingBottom: 62,
  },
  viewForgotPassword: {
    height: 19,
    width: 19,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.2)",
    marginRight: 6,
  },
  viewTick: {
    flexDirection: "row",
    width: "100%",
    marginTop: 16,
    alignItems: "center",
  },
  textSignUp: {
    fontWeight: "bold",
  },
});
