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
  Dimensions
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
      <View style={{marginTop: 20}}>
      {fotos.map(foto =>
        <View>
        <Text>{foto.usuario}</Text>
        <Image   
          style={{width: width, height: width}}       
          source={require('./foto.png')}
        />        
        </View>          
        )}
     </View>
      
     
    );
  }
}



AppRegistry.registerComponent('InstaluraMobile', () => InstaluraMobile);
