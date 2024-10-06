// src/navigation/HomeStackNavigator.tsx
import React from "react";
import { createNativeStackNavigator } from "@/utils/packages";
import { HomeScreen, ServiceDetailScreen } from "@/features/home";

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="ServiceDetail" component={ServiceDetailScreen} />
        </HomeStack.Navigator>
    );
};

export default HomeStackNavigator;
