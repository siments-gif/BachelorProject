import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import Genres from "../screens/genres";
import Romance from "../screens/romance";
import SciFi from "../screens/sci-fi";
import Comedy from "../screens/comedy";
import Action from "../screens/action";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      headerStyle: {
        backgroundColor: "#fff",
      },
      headerTintColor: "black",
      headerBack: <TouchableOpacity onPress={() => navigation.goBack()}></TouchableOpacity>
    }}
   >
      <Stack.Screen name="Genres" component={Genres} />
      <Stack.Screen name="Action" component={Action} />
      <Stack.Screen name="Comedy" component={Comedy} />
      <Stack.Screen name="Romance" component={Romance} />
      <Stack.Screen name="SciFi" component={SciFi} />
    </Stack.Navigator>
  );
}

export { StackNavigator };