import React from "react";
import { View } from "react-native-web";
import {MaterialIcons} from '@expo/vector-icons';
import { globalStyles } from "../styles/global";


export default function Header ({ navigation }) {

    const openMenu = () => {
        navigation.openDraw()
     }

    return (
        <View style={globalStyles.header}>
        <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
           <View>
           <Text style={globalStyles.headerText}>BachelorProject</Text>
           </View>
        </View>
    )
}