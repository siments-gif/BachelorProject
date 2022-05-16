import React from "react";
import Home from './screens/home';
import Review from "./screens/review";
import About from "./screens/about";
import Navigator from './routes/drawNav';
import Header from "./shareDocs/header";
import MaterialIcons from 'react-native-vector-icons'
import Tabs from './routes/tabNav';
import { NavigationContainer } from "@react-navigation/native";


const App = () => {
    
    return (
        
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>       
        )
}

export default App;