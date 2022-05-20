import React from 'react';
import { Text, View, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Header from '../shareDocs/header';

export default function About() {
  
  console.log(require('../assets/favicon.png'))
  
  return (
    <View style={globalStyles.contentContainer}>
      <Text style={globalStyles.aboutText}>
       (OveReview) is an aggregation application for collecting movie reviews and ratings from various other websites. 
      Not just any ratings either, the focus lies with audiences rather than professional critics.
      </Text>
      
      <Text style={globalStyles.aboutText}>
      After carefully studying other review applications and websites, we found that regular movie watchers are not getting the attention they deserve. Here at (Company Name) we pride ourselves on being advocates for the average film lover! Just because professional critics have “professional” in the name, does not mean they are always correct. Average people provide a lot more relatability to one another, even though tastes may vary. Movie critics are no strangers to different tastes themselves, and if you do not know anything about their background, they might as well be anyone. Aside from this, there are a lot of movies out there with quite few reviews and ratings, therefore we want to collect all of them in one place to create a single review that is as clear as possible. More votes mean more accuracy. 
       (OveReview) collects data from external websites and saves it to our own database. Then the data is collected from the database and ratings get updated. It was created within the REACT Native framework to launch as a mobile application using JavaScript code language.
      This application is a bachelor’s project made by IT- students from USN Vestfold. 
      </Text>
      
    </View>
  );
}