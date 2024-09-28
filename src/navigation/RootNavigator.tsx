import { CartStackParamList, HomeStackParamList, ProfileStackParamList, RootStackParamList } from '@/types/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { Login, Splash } from '../features/auth';
import { Home } from '@/features/home';
import MainTabNavigator from './MainTabNavigator'; // Import your Tab Navigator
import { themeLight } from '@/config/themes';
import { Cart, SelectDate } from '@/features/cart';
import { OrderDetail, OrderHistory, Profile } from '@/features/profile';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const CartStack = createNativeStackNavigator<CartStackParamList>();
const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

// Auth Stack Navigator for Login flow
const AuthStack = () => (
  <RootStack.Navigator screenOptions={{ headerShown: false }}>
    <RootStack.Screen name="Splash" component={Splash} />
    <RootStack.Screen name="Login" component={Login} />
  </RootStack.Navigator>
);

// Home Stack Navigator for Home and other screens
export const HomeStackNavigator = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
);

export const CartStackNavigator = () => (
  <CartStack.Navigator screenOptions={{ headerShown: false }}>
    <CartStack.Screen name="Cart" component={Cart} />
    <CartStack.Screen name="SelectDate" component={SelectDate} options={{ presentation: 'fullScreenModal' }} />
  </CartStack.Navigator>
);

export const ProfileStackNavigator = () => (
  <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
    <ProfileStack.Screen name="Profile" component={Profile} />
    <ProfileStack.Screen name="OrderHistory" component={OrderHistory} />
    <ProfileStack.Screen name="OrderDetail" component={OrderDetail} />
  </ProfileStack.Navigator>
);

function Root() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer theme={themeLight}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {/* Authentication flow */}
        <RootStack.Screen name="AuthStack" component={AuthStack} />

        {/* Main Tab Navigator after login */}
        <RootStack.Screen name="MainTabs" component={MainTabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Root;
