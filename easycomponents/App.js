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

    static title = '<FlatList>';
    static description = 'Performant, scrollable list of data.';

    state = {
        data: this.genItemData(20,0),
        debug: false,
        horizontal: false,
        filterText: '',
        fixedHeight: true,
        logViewable: false,
        virtualized: true,
    };

    genItemData(loadNum,counts){
        let items = [];
        for(let i=counts;i<counts+loadNum;i++){
            items.push({key:i});
        }
        return items;
    };

    _onEndReached(){
        this.setState((state) => ({
            data: state.data.concat(this.genItemData(10, state.data.length)),
        }));
    };

    render() {
        return (

            <View style={styles.container}>
                <RNFixedScrollView   style={{
                    backgroundColor: '#6A85B1'
                }}>
                    <View style={{
                        backgroundColor: '#6A35B1',
                        height: 250,
                    }}/>
                    <ViewPagerPage/>
                    <FlatList style={{ height: Dimensions.get('window').height - 200,}}
                        ItemSeparatorComponent={() => <View
                            style={{height: 1, backgroundColor: 'black', marginLeft: 0}}/>}
                        data={this.state.data}
                        onEndReached={this._onEndReached.bind(this)}
                        onEndReachedThreshold={0.2}
                        renderItem={({item}) => <View
                            style={{flex:1, justifyContent: 'center',height:40,alignItems:'center'}}><Text
                            style={{fontSize: 16}}>{item.key}</Text></View>}
                    />
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
