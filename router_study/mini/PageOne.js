/**
 * Created by Sean on 2016/6/29.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class PageOne extends Component {
    /*
     render() {
         return (
             <View style={{margin: 128}}>
                 <Text onPress={Actions.pageTwo}>This is PageOne!</Text>
             </View>
         )
     }
     */
    render() {
        //Actions.SCENE_KEY(PARAMS)
        const goToPageTwo = () => Actions.pageTwo({text: 'Hello World!'});
        return (
            <View style={{margin: 128}}>
                <Text onPress={Actions.pageTwo}>This is PageOne!</Text>
            </View>
        )
    }
}