/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList
} from 'react-native';

const width = Dimensions.get('screen').width;

export default class InstaluraMobile extends Component {
  render() {
    const fotos = [
      {id: 1, usuario: 'Benildo'},
      {id: 2, usuario: 'Bruna'},
      {id: 3, usuario: 'Mario'}
    ];

    return (
      <FlatList style={{marginTop: 20}}
    data={fotos}
    keyExtractor={item => item.id}
    renderItem={ ({item}) => 
    <View>
      <Text>{item.usuario}</Text>
      <Image source={require('./foto.png')} style={{width:width, height:width}} />
    </View>
          }
    />     
    );
  }
}



AppRegistry.registerComponent('InstaluraMobile', () => InstaluraMobile);
