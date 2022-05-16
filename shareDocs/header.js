import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import { globalStyles } from "../styles/global";

export default function Header() {
    return (
        <SafeAreaView style={globalStyles.headerContainer}>
          <View style={globalStyles.header}>
            <Text style={globalStyles.headerText}>
                BachelorProject </Text>
          </View>
        </SafeAreaView>

        /* <SafeAreaView style={globalStyles.underHeader}>
          <View>
            <Text style={globalStyles.headerSubText}>
                Mobile application for ios & android
            </Text>
          </View>
        </SafeAreaView> */

        
    )};