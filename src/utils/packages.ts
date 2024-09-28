import moment from "moment";
import { isNaN, isNull, isUndefined } from "lodash";
import {
  CommonActions,
  useNavigation,
  useTheme,
} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Icon, Text } from "@rneui/themed";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useDispatch, useSelector } from "react-redux";

export {
  moment,

  //lodash
  isNaN,
  isNull,
  isUndefined,

  // @react-navigation/native
  CommonActions,
  useNavigation,
  useTheme,
  createBottomTabNavigator,

  // @react-native-async-storage/async-storage
  AsyncStorage,

  // @rneui/themed
  Icon,
  Text,

  // @hookform/resolvers/zod
  zodResolver,

  // react-hook-form
  useForm,

  // react-native-keyboard-aware-scroll-view
  KeyboardAwareScrollView,

  // react-redux
  useDispatch,
  useSelector,
};
