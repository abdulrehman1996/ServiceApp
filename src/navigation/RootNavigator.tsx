import { themeLight } from '@/config/themes';
import { RootStackParamList } from '@/types/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { Login, Splash } from '../features/auth';
import MainTabNavigator from './MainTabNavigator'; // Import your Tab Navigator

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => (
  <RootStack.Navigator screenOptions={{ headerShown: false }}>
    <RootStack.Screen name="Splash" component={Splash} />
    <RootStack.Screen name="Login" component={Login} />
  </RootStack.Navigator>
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
