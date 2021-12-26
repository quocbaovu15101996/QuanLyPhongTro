/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {FunctionComponent, useState} from 'react';
import {NativeModules, TouchableOpacity} from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const {CalendarModule, HelloWorld} = NativeModules;

const Home: FunctionComponent = () => {
  const [state, updateState] = useState({
    name: 'Bảo',
    age: '25',
    like: 'final',
  });
  const isDarkMode = useColorScheme() === 'dark';

  async function sayHiFromJava() {
    updateState({
      name: 'Bảo',
      age: '25',
      like: 'footbal',
    });
    // HelloWorld.sayHi(
    //   (err: any) => {
    //     console.log('sayHiFromJava', err);
    //   },
    //   (msg: any) => {
    //     console.log('sayHiFromJava', msg);
    //   },
    // );
    // CalendarModule.createCalendarEvent('testName', 'testLocation');
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <TouchableOpacity onPress={sayHiFromJava}>
          <Text>Test onPress function from Native</Text>
          <Text>{state.name}</Text>
          <Text>{state.age}</Text>
          <Text>{state.like}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
