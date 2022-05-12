import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import Home from '../screens/home';
import About from '../screens/about';
import Review from '../screens/review';

const drawNavigatorRoot = createDrawerNavigator({
    Home: {
        screen: Home,
    },
    About: {
        screen: About,
    },

    Review: {
        screen: Review
    }
})

export default createAppContainer(drawNavigatorRoot);