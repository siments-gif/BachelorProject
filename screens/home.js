import React from 'react';
import { View, Image} from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home() {

    console.log(require('../assets/Slider1.jpeg'))
  
    return (
    <View style={globalStyles.contentContainer}>
      <Image style={globalStyles.homeImage} 
       source={require('../assets/Slider1.jpeg') } />
    </View>
     );
}
  