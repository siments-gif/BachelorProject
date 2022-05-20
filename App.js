 
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Tabs } from "./routes/tabNav";
import Genres from "./screens/genres";
import Action from "./screens/action";
import Comedy from "./screens/comedy";
import { StackNavigator } from "./routes/stackNav";


const App = () => {

    return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>,

        <NavigationContainer>
         <Tabs />
        </NavigationContainer> 
        )
}

export default App;