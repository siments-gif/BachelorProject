 
import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";

const Genres = ({ navigation }) => {
  return (
     [<View style={globalStyles.headerContainer}>
      <Text style={globalStyles.headerText}>
        In this screen you can navigate between different genres of movies.
        
        </Text>
      </View>,

      <View style={globalStyles.stackNav}>
      <Button
        style={globalStyles.button}
        title="Action"
        onPress={() => navigation.navigate("Action")}
      />
      <Button
        style={globalStyles.button}
        title="Comedy"
        onPress={() => navigation.navigate("Comedy")}
      />
      <Button
        style={globalStyles.button}
        title="Romance"
        onPress={() => navigation.navigate("Romance")}
      />
      <Button
        style={globalStyles.button}
        title="SciFi"
        onPress={() => navigation.navigate("SciFi")}
      />
    </View>]
  );
};

export default Genres;