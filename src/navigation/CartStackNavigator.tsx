// src/navigation/CartStackNavigator.tsx
import React from "react";
import { createNativeStackNavigator } from "@/utils/packages";
import { CartScreen, SelectDateModal } from "@/features/cart";

const CartStack = createNativeStackNavigator();

const CartStackNavigator = () => {
    return (
        <CartStack.Navigator screenOptions={{ headerShown: false }}>
            <CartStack.Screen name="CartScreen" component={CartScreen} />
            <CartStack.Screen
                name="SelectDate"
                component={SelectDateModal}
                options={{ presentation: "fullScreenModal" }}
            />
        </CartStack.Navigator>
    );
};

export default CartStackNavigator;
