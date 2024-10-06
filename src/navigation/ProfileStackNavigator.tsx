// src/navigation/ProfileStackNavigator.tsx
import React from "react";
import { createNativeStackNavigator } from "@/utils/packages";
import {
    OrderDetailScreen,
    OrderHistoryScreen,
    ProfileScreen,
} from "@/features/profile";

const ProfileStack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
    return (
        <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
            <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
            <ProfileStack.Screen name="OrderHistory" component={OrderHistoryScreen} />
            <ProfileStack.Screen name="OrderDetail" component={OrderDetailScreen} />
        </ProfileStack.Navigator>
    );
};

export default ProfileStackNavigator;
