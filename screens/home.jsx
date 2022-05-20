import React from 'react';
import { Text, View, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../styles/global';

export default function Home() {

    console.log(require('../assets/Slider1.jpg'))
    console.log(require('../assets/Slider2.jpg'))
  
    return (

    <View style={globalStyles.homeContainer}>
      <Image style={globalStyles.homeImages} 
       source={require('../assets/Slider1.jpg') } />
       <Image style={globalStyles.homeImages} 
       source={require('../assets/Slider2.jpg') } />

       <Text style={globalStyles.homeText}>
         Welcome to OverReview!
         If you hold any skepticism towards a film's quality, 
         you came to the right place! Others feel the same and they are here to help you!
       </Text>
       
       </View>
     );
}