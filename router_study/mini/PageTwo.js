/**
 * Created by Sean on 2016/6/29.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class PageTwo extends Component {

    static defaultProps = {
        text: "hello"
    }

    constructor(props) {
        super(props);
    }

    render() {
        const refreshThisPage = () => Actions.refresh({text: 'Hello Sean!'});
        return (
            <View style={{margin: 128}}>
                <Text onPress={Actions.pageOne}>This is PageTwo!</Text>
                <Text onPress={Actions.pop}>Pop to PageOne</Text>
                <Text>{this.props.text}</Text>
                <Text onPress={refreshThisPage}>ReFresh</Text>
            </View>
        )
    }
}