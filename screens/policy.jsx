import React from 'react';
import { Text, View, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../styles/global';

export default function Policy() {

    console.log(require('../assets/Slider1.jpg'))
    console.log(require('../assets/Slider2.jpg'))
  
    return (
        
    <ScrollView style={globalStyles.policyContainer}>

       <View>
       <Text style={globalStyles.policyHeader}>
       Your rights with regarding personal data (GDPR)
       The following rights are applied to all users of our application
       </Text>
       </View>
       
       <Text style={globalStyles.policyListTop}>
      -	The right to be informed of why your personal data is collected, what we use your personal data for and for how long we will keep your personal data.</Text>
      <Text style={globalStyles.policyList}>
      -	The right to access your personal data that is collected by the application.</Text>
      <Text style={globalStyles.policyList}>
      -	The right to edit, delete or block your personal data that is collected by the application</Text>
      <Text style={globalStyles.policyList}>
      -	The right to revoke your consent for our collection and usage of your personal data.</Text>
      <Text style={globalStyles.policyList}>
      -	The right to transfer all your personal data the application has collected and to transfer the data.</Text>
      <Text style={globalStyles.policyListBot}> 
      -	The right to object processing of your personal data
      </Text>


      <View>
      <Text style ={globalStyles.policyFooter}>
      If you need to exercise any of these rights or have any complaints in how we process your personal data then you can contact us.
      Contact details are found on the contact screen. 
      You can also submit a complain to the Data Protection Authority.
      </Text>
      </View>

       
       </ScrollView>
     );
}