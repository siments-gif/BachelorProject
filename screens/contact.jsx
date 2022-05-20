import React from "react";
import { View, StyleSheet, Text, StatusBar, SectionList } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";


const DATA = [
  {
    title: "Information",
    data: [ 
      "We have not yet created an e-mail or phone number designated to customer support, but you can still reach the respective team members if you have any questions. We would be delighted to help you in any way we can!"
    ]
  },
  
  {
    title: "Simen Tveitane Skogen",
    data: [
    "Role   -  Team leader",
    "Phone   -   46471518",
    "Gmail   -   sim1skogen@gmail.com"]
  },
  {
    title: "Simen Tveitane Skogen",
    data:[ 
    "Role   -  Team leader",
    "Phone   -    97502066",
    "Gmail   -   akselnr.2@gmail.com"]
  },
  {
    title: "Simen Tveitane Skogen",
    data: [
    "Role   -  Team leader",
    "Phone   -   92060688",
    "Gmail   -   Kristerlassen@gmail.com"]
  },
  {
    title: "Simen Tveitane Skogen",
    data: [
    "Team leader",
    " 95368075",
    "pettersen00@gmail.com"]
  },
];

const Item = ({ title }) => (
  <View style={globalStyles.item}>
    <Text style={globalStyles.title}>{title}</Text>
  </View>
);

const Contact = () => {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={globalStyles.header}>{title}</Text>
      )}
    />
  )};

export default Contact;