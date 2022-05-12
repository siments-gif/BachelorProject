import React from 'react';
import { Text, View, Image} from 'react-native';
import { globalStyles } from '../styles/global';
import Header from '../shareDocs/header';

export default function Contact() {
  
    console.log(require('../assets/splash.png'))
    
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Contact us
        </Text>
        <Text style={globalStyles.contactInfo}>
            <p>Simen <p>
               Epost: sim1skogen@gmail.com
            </p>
            </p>
            <p>Aksel</p>
            <p>Krister</p>
            <p>Ivar</p>
            <p></p>
            <p></p>
        </Text>

        <Image style={globalStyles.Image} source={require('../assets/favicon.png') } />
       </View>
    
    );
  }