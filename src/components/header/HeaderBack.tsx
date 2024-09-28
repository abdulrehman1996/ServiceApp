import { useNavigation, useTheme } from '@react-navigation/native';
import { Icon } from '@/utils/packages';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontSize } from '@/utils/dimensions';


const HeaderBack = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={.3}
      hitSlop={{ top: 15, right: 15, left: 15, bottom: 15 }}
      onPress={() => navigation.goBack()}>
      <Icon name="arrowleft" color={colors.text} size={FontSize(20)} type='antdesign' />
    </TouchableOpacity>
  );
};

export default HeaderBack;

