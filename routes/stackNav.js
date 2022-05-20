import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Genres from "../screens/genres";
import Home from "../screens/home";
import Romance from "../screens/romance";
import SciFi from "../screens/sci-fi";
import Comedy from "../screens/comedy";
import Action from "../screens/action";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
      headerStyle: {
        backgroundColor: "#9AC4F8",
      },
      headerTintColor: "white",
      headerBackTitle: "Back",
    }}
   >
      <Stack.Screen name="Genres" component={Genres} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Action" component={Action} />
      <Stack.Screen name="Comedy" component={Comedy} />
      <Stack.Screen name="Romance" component={Romance} />
      <Stack.Screen name="SciFi" component={SciFi} />
    </Stack.Navigator>
  );
}

export { StackNavigator };