import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import Home from '../screens/home';
import About from '../screens/about';
import Review from '../screens/review';
import Contact from '../screens/contact';
import Genres from '../screens/genres';

const drawNavigatorRoot = createDrawerNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {

            }
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
    },

    Contact: {
        screen: Contact,
        navigationOptions: {
            title: 'Contact'
        },
    },

    Genres: {
        screen: Genres,
        navigationOptions: {
            title: 'Genres'
        },
    },
})

export default createAppContainer(drawNavigatorRoot);