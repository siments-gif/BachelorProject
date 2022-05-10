import React from "react";
import Home from './screens/home';
import Review from "./screens/review";
import About from "./screens/about";
import Navigator from './routes/homeStack';



export default function App() {
    return (
    [<Home /> , <About /> , <Review />]
    );
}