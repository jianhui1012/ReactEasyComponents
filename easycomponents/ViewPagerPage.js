/**
 * Created by golike on 2018/1/16.
 */
import {StyleSheet, View, Text, Platform, Image, TouchableOpacity, Animated, Dimensions,FlatList} from 'react-native';
import React, {Component} from 'react';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

const windowWidth = Dimensions.get('window').width;
export default class ViewPagerPage extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <IndicatorViewPager
                    style={{height:200}}
                    indicator={this._renderDotIndicator()}
                >
                    <View style={{backgroundColor:'cadetblue'}}>
                        <Text>page one</Text>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue'}}>
                        <Text>page two</Text>
                    </View>
                    <View style={{backgroundColor:'#1AA094'}}>
                        <Text>page three</Text>
                    </View>
                </IndicatorViewPager>

                <IndicatorViewPager
                    style={{flex:1, paddingTop:20, backgroundColor:'white',flexDirection:'column-reverse'}}
                    indicator={this._renderTitleIndicator()}
                >
                    <View style={{backgroundColor:'cadetblue'}}>
                        <FlatList
                            data={[{key: 'a'}, {key: 'b'}]}
                            renderItem={({item}) => <Text>{item.key}</Text>}
                        />
                    </View>
                    <View style={{backgroundColor:'cornflowerblue'}}>
                        <Text>page two</Text>
                    </View>
                    <View style={{backgroundColor:'#1AA094'}}>
                        <Text>page three</Text>
                    </View>
                </IndicatorViewPager>

                <IndicatorViewPager
                    style={{flex:1, paddingTop:20, backgroundColor:'white'}}
                    indicator={this._renderTabIndicator()}
                >
                    <View style={{backgroundColor:'cadetblue'}}>
                        <Text>page one</Text>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue'}}>
                        <Text>page two</Text>
                    </View>
                    <View style={{backgroundColor:'#1AA094'}}>
                        <Text>page three</Text>
                    </View>
                </IndicatorViewPager>
            </View>
        );
    }

    _renderTitleIndicator() {
        return <PagerTitleIndicator style={{
        backgroundColor: 0x00000020,
        height: 48
    }} trackScroll={true} itemStyle={{width:windowWidth/3}}
                                    selectedItemStyle={{width:windowWidth/3}} titles={['one', 'two', 'three']}/>;
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3}/>;
    }

    _renderTabIndicator() {
        let tabs = [{
            text: 'Home',
            iconSource: require('./imgs/ic_tab_circle.png'),
            selectedIconSource: require('./imgs/ic_tab_circle_slct.png')
        }, {
            text: 'Message',
            iconSource: require('./imgs/ic_tab_square.png'),
            selectedIconSource: require('./imgs/ic_tab_square_slct.png')
        }, {
            text: 'Profile',
            iconSource: require('./imgs/ic_tab_triangle.png'),
            selectedIconSource: require('./imgs/ic_tab_triangle_slct.png')
        }];
        return <PagerTabIndicator tabs={tabs}/>;
    }

}