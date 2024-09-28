import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PastOrders from './PastOrders';
import UpcomingOrders from './UpcomingOrders';
import FavoriteOrders from './FavoriteOrders';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView, View } from 'react-native';
import Header, { HeaderBack } from '@/components/header';
import { Text } from '@/components/text';

const Tab = createMaterialTopTabNavigator();

export default function OrderHistory() {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <Header leftComponent={<HeaderBack />} centerComponent={<Text h2 bold>{"Your Bookings"}</Text>} />
      <Tab.Navigator
        initialRouteName='Upcoming'
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.text,
          tabBarIndicatorStyle: { backgroundColor: colors.primary },
        }}>
        <Tab.Screen name="Past" component={PastOrders} />
        <Tab.Screen name="Upcoming" component={UpcomingOrders} />
        <Tab.Screen name="Favorites" component={FavoriteOrders} />
      </Tab.Navigator>
    </View>
  );
}
