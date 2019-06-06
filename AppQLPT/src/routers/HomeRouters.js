import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";

import HomeScreen from '../components/HomeScreen';
import ThongKeScreen from '../components/ThongKeScreen';
import NhaTroScreen from '../components/NhaTroScreen';
import ThongBaoScreen from '../components/ThongBaoScreen';
import SettingScreen from '../components/SettingScreen';

const HomeNavigator = createSwitchNavigator({
    ThongKe: { screen: ThongKeScreen },
    NhaTro: { screen: NhaTroScreen },
    ThongBao: { screen: ThongBaoScreen },
    Setting: { screen: SettingScreen }
});
const HomeRouters = createStackNavigator({
    HomeScreen: { screen: HomeScreen },
    HomeNavigator,
},
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);

export default createAppContainer(HomeRouters);