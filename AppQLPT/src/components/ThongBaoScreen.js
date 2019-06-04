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


class ThongBaoScreen extends Component {
    constructor(props) {
        super(props)

    }

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <CusHeader title={'Thông Báo'}/>
                <ScrollView>
                    <Text>Thông Báo</Text>
                </ScrollView>
                <CusFooter />
            </View>
        );
    }
}

export default connect(null, null)(ThongBaoScreen);