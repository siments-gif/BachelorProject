 
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./routes/stackNav";
import { Tabs } from "./routes/tabNav";
import Genres from "./screens/genres";


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