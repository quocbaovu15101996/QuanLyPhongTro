import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Child from './components/Child';
import * as actions from './actions';
import { connect } from 'react-redux';

class Main extends Component {
    handleIncrease(){
        //console.log('counterIncrease');
        this.props.counterIncrease();
    };

    handleDecrease(){
        this.props.counterDecrease();
        //console.log('counterDecrease')
    };
    render() {
        return (
            <View style={{
                flex: 1,
                width: '100%',
                justifyContent: 'center'
            }}
            >
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Child />
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{ backgroundColor: 'yellow', height: 100, justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => { this.handleIncrease() }}>
                        <Text style={{ fontSize: 20, color: 'black' }}>Increase</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: 'green', height: 100, justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => { this.handleDecrease() }}>
                        <Text style={{ fontSize: 20, color: 'black' }}>Decrease</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
// export default Main;
export default connect(null, actions)(Main);

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: 'red'
    },
    btnStyle: {
        width: 100,
        height: 40,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: "red",
        backgroundColor: "#15c"
    },
});