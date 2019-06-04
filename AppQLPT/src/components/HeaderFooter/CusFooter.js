import React, { Component } from 'react';
import {
    Image,
    Text,
    View, TextInput, TouchableOpacity, KeyboardAvoidingView,
    Alert, Dimensions,
    StyleSheet
} from 'react-native';
import { scale, verticalScale } from "../../userControl/Scale";
import { withNavigation } from 'react-navigation';
const win = Dimensions.get('window');
const routers = [
    { id: 1, screen: 'ThongKe' },
    { id: 2, screen: 'NhaTro' },
    { id: 3, screen: 'ThongBao' },
    { id: 4, screen: 'Setting' },
]
import { connect } from 'react-redux';

class CusFooter extends Component {
    constructor(props) {
        super(props)

    }
    calItemWidth() {
        return (routers.length ? (win.width / routers.length ) : win.width);
      }
    render() {
        return (
            <View style={styles.footer}>
                {
                    routers.map((element, i) => {
                        return (
                            <TouchableOpacity key={i}
                                onPress={() => { this.props.navigation.navigate(element.screen); }}
                            >
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',width: this.calItemWidth() }}>
                                    <Text>{element.screen}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: win.height / 12,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black'
    },

})


export default connect(null, null)(withNavigation(CusFooter));