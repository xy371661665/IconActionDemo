/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    TouchableOpacity
} from 'react-native';
import ActionSheet from 'react-native-IconAction';

const shareIcon = [
  {
    text:'微信好友',
    icon:require('./image/share_wx_friend.png')
  },
  {
    text:'朋友圈',
    icon:require('./image/share_wx_circle.png')
  },
  {
      text:'QQ好友',
      icon:require('./image/share_qq_friend.png')
  },
  {
      text:'QQ空间',
      icon:require('./image/share_zone.png')
  }
];

export default class App extends Component<{}> {

  openSheet = ()=>{
    this.ActionSheet.show();
  };

  selectSheet = (index) => {
    console.warn(`点击了第${index}个按钮`);
  };

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity
            style={{width:100,height:50}}
            activeOpacity={0.8}
            onPress={this.openSheet}
        >
          <Text>点我打开</Text>
        </TouchableOpacity>

        <ActionSheet
            bottonList={shareIcon}
            marginV={19}
            marginH={20}
            ref={ref=>this.ActionSheet = ref}
            onPress={this.selectSheet}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
