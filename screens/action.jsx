import React from 'react';
import { Text, View, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Header from '../shareDocs/header';

const Action = ({ navigation }) => {
  
  console.log(require('../assets/favicon.png'))
  
  return (
    <>
      <Text style={globalStyles.titleText}>Action</Text>
      <Image style={globalStyles.Image} source={require('../assets/favicon.png') } />
    </>
  );
}

export default Action;