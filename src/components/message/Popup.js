import React, { Children, useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RNModal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';

export function Popup({ showPopup, children, hidePopup, modalStyle }) {
  const navigation = useNavigation();
  return (
    <RNModal
      onBackButtonPress={hidePopup}
      isVisible={showPopup}
      // statusBarTranslucent
      backdropOpacity={0.5}
      onBackdropPress={hidePopup}
      onSwipeComplete={hidePopup}
      hideModalContentWhileAnimating
      animationOutTiming={10}
      backdropTransitionOutTiming={0}
      style={{ marginHorizontal: 24 }}>
     {children? children : <View />}
    </RNModal>
  );
  
}
