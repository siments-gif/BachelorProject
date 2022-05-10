import React from 'react';
import { Text, View, Image } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {
  
  console.log(require('../assets/favicon.png'))
  
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>About</Text>
      <Image style={globalStyles.Image} source={require('../assets/favicon.png') } />
    </View>
  );
}