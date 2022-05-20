import React from 'react';
import { Text, View, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Header from '../shareDocs/header';

export default function About() {
  
  console.log(require('../assets/favicon.png'))
  
  return (
    <View style={globalStyles.aboutContainer}>
      <Text style={globalStyles.aboutText}>
      OveReview is and aggregation application for all kinds of movies. 
      Not just any ratings, the focus lies with audiences rather than professional critics. 
      We pride ourselves on being advocates for the regular person.
      </Text>
      
      <Text style={globalStyles.aboutText}>
      There are a lot of movies with few ratings, therefore we want to collect them in one place to create a single review that is as clear as possible. 
        Majority voting means accuracy.
      </Text>

      <Text style={globalStyles.aboutText}>
      We collect data from external websites and save it to our own database. 
      Then the data is collected from the database to update ratings.
      </Text>
      
    </View>
  );
}