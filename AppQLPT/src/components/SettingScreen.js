import React, { Component } from 'react';
import {
    Image,
    Text,
    View, TextInput, TouchableOpacity, KeyboardAvoidingView,
    Alert,
    ScrollView,
    Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { scale, verticalScale } from '../userControl/Scale';
import CusHeader from './HeaderFooter/CusHeader';
import CusFooter from './HeaderFooter/CusFooter';


class SettingScreen extends Component {
    constructor(props) {
        super(props)

    }

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <CusHeader title={'Cài Đặt'}/>
                <ScrollView>
                    <Text>Màn Hình Cài Đặt</Text>
                </ScrollView>
                <CusFooter />
            </View>
        );
    }
}

export default connect(null, null)(SettingScreen);