import React from "react";
import { createBottomTabNavigator, Icon, useTheme } from "@/utils/packages";
import { CartStackNavigator, HomeStackNavigator, ProfileStackNavigator } from "./RootNavigator";
import { StyleSheet, View } from "react-native";
import { FontSize } from "@/utils/dimensions";
import { Text } from "@/components/text";
import { ThemeColors } from "@/types";
import { useSelector } from "react-redux";

function MainTabNavigator() {
  const Tab = createBottomTabNavigator();
  const { colors } = useTheme() as { colors: Partial<ThemeColors> }
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  const tabBarIconView = (color, label) => {
    return (
      <View style={styles.main}>
        <Icon
          name={label == "Home" ? "home-filled" : label == "Explore" ? "search" : label == "Cart" ? "shoppingcart" : "user"}
          type={label == "Home" ? "material" : label == "Explore" ? "octicon" : label == "Cart" ? "antdesign" : "feather"}
          size={FontSize(30)}
          color={color}
        />
        <Text style={{ color: color, marginTop: 5 }}>{label}</Text>
      </View>
    )
  }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarVisible: true,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        // tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.border,

        // tabBarActiveBackgroundColor:colors.primary,
        // tabBarInactiveBackgroundColor:'#fff',
        // tabBarLabelStyle:{fontSize:12,fontFamily:fonts.bold},

      })}
    // tabBarOptions={{

    //   // Customize your tab bar options here (e.g., icon, style)
    // }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ color, size, focused }) => tabBarIconView(color, "Home")
        }}
      />
      <Tab.Screen
        name="Explore"
        component={HomeStackNavigator}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ color, size, focused }) => tabBarIconView(color, "Explore")
        }}
      />
      <Tab.Screen name="Cart" component={CartStackNavigator}
        options={{
          tabBarBadge: cartItems.length,
          tabBarBadgeStyle: {
            backgroundColor: colors.error,
          },
          unmountOnBlur: true,
          tabBarIcon: ({ color, size, focused }) => tabBarIconView(color, "Cart")
        }}
      />
      <Tab.Screen name="Profile" component={ProfileStackNavigator}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ color, size, focused }) => tabBarIconView(color, "Profile")
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;


const styles = StyleSheet.create({
  main: {
    alignItems: 'center'
  },
  tabBar: {
    height: 100
  }
})