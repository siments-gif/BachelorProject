import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import About from "../screens/about";
import Contact from "../screens/contact";
import Genres from "../screens/genres";
import Home from "../screens/home";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (

        <Tab.Navigator

        screenOptions={({ route }) => ({

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';

            } else if (route.name === 'Genres') {
                iconName = focused
                ? "list-sharp"
                : 'list-outline';
            }

            else if (route.name === 'About') {
                iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            }

            else if (route.name === 'Contact') {
                iconName = focused
                ? 'phone-portrait-sharp'
                : 'phone-portrait-sharp';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
          tabBarActiveBackgroundColor: '#d3d3d3'
        })}
      >

            <Tab.Screen name="Home" component={Home}></Tab.Screen>
            <Tab.Screen name="Genres" component={Genres}></Tab.Screen>
            <Tab.Screen name="About" component={About}></Tab.Screen>
            <Tab.Screen name="Contact" component={Contact}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs;