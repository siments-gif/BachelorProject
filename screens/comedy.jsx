import React from 'react';
import { Text, View, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Header from '../shareDocs/header';

export default function Comedy() {
  
  console.log(require('../assets/favicon.png'))
  
  return (
    <View style={globalStyles.contentContainer}>
      <Text style={globalStyles.titleText}>Comedy</Text>
      <Image style={globalStyles.Image} source={require('../assets/favicon.png') } />
    </View>
  );
}