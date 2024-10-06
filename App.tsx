import Root from './src/navigation/RootNavigator';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import store from '@/stores/configureStore';
import { MyFlashMessage } from '@/components/message';
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium, useFonts } from '@expo-google-fonts/poppins';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });
  console.dir({ fontsLoaded });

  return (
    <Provider store={store}>
      <Root />
      <MyFlashMessage />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
