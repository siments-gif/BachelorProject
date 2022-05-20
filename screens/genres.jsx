 
import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Genres = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      <Button
        title="Action"
        onPress={() => navigation.navigate("Action")} // We added an onPress event which would navigate to the About screen
      />
      <Button
        title="Comedy"
        onPress={() => navigation.navigate("Comedy")} // We added an onPress event which would navigate to the About screen
      />
      <Button
        title="Romance"
        onPress={() => navigation.navigate("Romance")} // We added an onPress event which would navigate to the About screen
      />
      <Button
        title="SciFi"
        onPress={() => navigation.navigate("SciFi")} // We added an onPress event which would navigate to the About screen
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Genres;