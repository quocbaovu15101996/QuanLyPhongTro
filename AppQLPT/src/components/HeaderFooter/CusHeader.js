import React, { Component } from 'react';
import {
    Image,
    Text,
    View, TextInput, TouchableOpacity, KeyboardAvoidingView,
    Alert, Dimensions,
    StyleSheet
} from 'react-native';
import { scale, verticalScale } from "../../userControl/Scale";

const win = Dimensions.get('window');

export default class CusHeader extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.header_logo}>

                </View>
                <View style={styles.header_title}>
                    <Text>{this.props.title}</Text>
                </View>
                <View style={styles.header_noti}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: verticalScale(100),
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    header_logo: {
        width: scale(150),
        height: verticalScale(100),
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2
    },
    header_title: {
        width: scale(150),
        height: verticalScale(100),
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 6
    },
    header_noti: {
        width: scale(150),
        height: verticalScale(100),
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2
    }
})