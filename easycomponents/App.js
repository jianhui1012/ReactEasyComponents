/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    FlatList
} from 'react-native';
import ViewPagerPage from "./ViewPagerPage";
import RNFixedScrollView from './modules/RNFixedScrollView'

const windowHeight = Dimensions.get('window').height;
export default class App extends Component<{}> {


    render() {
        return (
            <View style={styles.container}>
                {/*<View style={{*/}
                    {/*height: 45,*/}
                    {/*position: 'absolute',*/}
                    {/*top: 20,*/}
                    {/*left: 0,*/}
                    {/*right: 0,backgroundColor: 'blue'*/}
                {/*}}><Text style={{padding:5}}>返回</Text></View>*/}
                <RNFixedScrollView showsVerticalScrollIndicator={false}>
                    <View style={{
                        backgroundColor: '#87cefa',
                        height: 200,
                    }}>
                    </View>
                    <ViewPagerPage style={{height: windowHeight- 80}}/>
                </RNFixedScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
