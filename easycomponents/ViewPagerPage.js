/**
 * Created by golike on 2018/1/16.
 */
import {StyleSheet, View, Text, Platform, Image, TouchableOpacity, Animated, Dimensions, FlatList} from 'react-native';
import React, {Component} from 'react';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

const windowWidth = Dimensions.get('window').width;
export default class ViewPagerPage extends Component {

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

                <IndicatorViewPager
                    style={[{backgroundColor: 'white', flexDirection: 'column-reverse'},this.props.style]}
                    indicator={this._renderTitleIndicator()}
                >
                    <View style={{backgroundColor: 'cornflowerblue'}}>
                        <Text>这里是课程介绍</Text>
                    </View>
                    <View style={{backgroundColor: 'cadetblue'}}>
                        <FlatList
                            ItemSeparatorComponent={() => <View
                                style={{height: 1, backgroundColor: 'black', marginLeft: 0}}/>}
                            data={this.state.data}
                            onEndReached={this._onEndReached.bind(this)}
                            onEndReachedThreshold={0.2}
                            renderItem={({item}) => <View
                                style={{  justifyContent: 'center',height:40,alignItems:'center'}}><Text
                                style={{fontSize: 16}}>{"目录"+item.key}</Text></View>}
                        />
                    </View>
                    <View style={{backgroundColor: '#1AA094'}}>
                        <Text>相关课程</Text>
                    </View>
                </IndicatorViewPager>

        );
    }

    _renderTitleIndicator() {
        return <PagerTitleIndicator style={{
            backgroundColor: 0x00000020,
            height: 48
        }} trackScroll={true} itemStyle={{width: windowWidth / 3}}
                                    selectedItemStyle={{width: windowWidth / 3}} titles={['详情介绍', '目录', '相关课程']}/>;
    }


}