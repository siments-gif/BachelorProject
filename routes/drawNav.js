import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import Home from '../screens/home';
import About from '../screens/about';
import Review from '../screens/review';

const drawNavigatorRoot = createDrawerNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return
        },
    },
    About: {
        screen: About,
        navigationOptions: {
            title: 'About'
        },
    },

    Review: {
        screen: Review,
        navigationOptions: {
            title: 'Reviews'
        },
    }
})

export default createAppContainer(drawNavigatorRoot);