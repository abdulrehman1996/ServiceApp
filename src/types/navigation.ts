import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  NavigationProp,
} from "@react-navigation/native";

export type RootStackParamList = {
  AuthStack: undefined;
  Splash: undefined;
  Login: undefined;
  MainTabs: undefined;
};
export type HomeStackParamList = {
  Home: undefined;
};
export type CartStackParamList = {
  Cart: undefined;
  SelectDate: undefined;
};
export type ProfileStackParamList = {
  Profile: undefined;
  OrderHistory: undefined;
  OrderDetail: undefined;
};

export type LoginScreenNavigationProps = CompositeNavigationProp<
  NavigationProp<RootStackParamList, "Login">,
  NativeStackNavigationProp<RootStackParamList>
>;

export type HomeNavigationProps = CompositeNavigationProp<
  NavigationProp<HomeStackParamList, "Home">,
  NativeStackNavigationProp<HomeStackParamList>
>;

export type OrderHistoryNavigationProps = CompositeNavigationProp<
  NavigationProp<ProfileStackParamList, "OrderHistory">,
  NativeStackNavigationProp<ProfileStackParamList>
>;
