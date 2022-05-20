import React from "react";
import { View, StyleSheet, Text, StatusBar, SectionList } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";


const DATA = [


  {
    title: "Simen Tveitane Skogen",
    data: [
    "Team leader",
    "46471518",
    "sim1skogen@gmail.com"]
  },

  {
    title: "Aksel Sundberg Sundberg",
    data:[ 
    "Team member",
    "97502066",
    "akselnr.2@gmail.com"]
  },

  {
    title: "Krister Lassen",
    data: [
    "Team member",
    "92060688",
    "Kristerlassen@gmail.com"]
  },
  
  {
    title: "Ivar Pettersen",
    data: [
    "Team member",
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