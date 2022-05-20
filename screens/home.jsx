import React from 'react';
import { Text, View, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../styles/global';

export default function Home() {

    console.log(require('../assets/Slider1.jpg'))
    console.log(require('../assets/Slider2.jpg'))
  
    return (

    <View style={globalStyles.contentContainer}>
      <Image style={globalStyles.homeImages} 
       source={require('../assets/Slider1.jpg') } />
       <Image style={globalStyles.homeImages} 
       source={require('../assets/Slider2.jpg') } />

       <Text style={globalStyles.homeText}>
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
       </Text>

       <Text style={globalStyles.homeText}>
         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
         It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
       </Text>
       
       </View>
     );
}