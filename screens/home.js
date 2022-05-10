import React from 'react';
import { Text, View, Image,} from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home() {

    console.log(require('../assets/favicon.png'))
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home</Text>
      <Image style={globalStyles.Image} source={require('../assets/favicon.png') } />
    </View>
     );
}
  