 
import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import { createStackNavigator } from "react-navigation-stack";

const Genres = ({ navigation }) => {
  return (
     [<View style={globalStyles.genresBack}>
      <Text style={globalStyles.headerText}>
        In this screen you can navigate between different genre of movies.

        </Text>
      </View>,

      <View style={globalStyles.stackNav}>

      <View style={globalStyles.button}>
      <Button
        color={'black'}
        title="Action"
        onPress={() => navigation.navigate("Action" , { screen: 'Action' })}
      />
      </View>
      
      <View style={globalStyles.button}>
      <Button
        color={'black'}
        title="Comedy"
        onPress={() => 
        navigation.navigate("Comedy" , {screen: 'Comedy'})}
      />
      </View>
      
      <View style={globalStyles.button}>
      <Button
        color={'black'}
        title="Romance"
        onPress={() => navigation.navigate("Romance" , {screen: 'Romance'})}
      />
      </View>
      
      <View style={globalStyles.button}>
      <Button
        color={'black'}
        title="SciFi"
        onPress={() => navigation.navigate("SciFi" , {screen: 'SciFi'})}
      />
      </View>
    </View>]

  );
};

export default Genres;