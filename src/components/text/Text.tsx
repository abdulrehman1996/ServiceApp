import { sizes } from '@/config/fonts';
import { CustomTextProps } from '@/types';
import { Text, useTheme } from '@/utils/packages';
import { Poppins_400Regular, Poppins_600SemiBold, useFonts } from '@expo-google-fonts/poppins';
import * as React from 'react';
import { ActivityIndicator, TextStyle } from 'react-native';

const CustomText: React.FC<CustomTextProps> = ({
  h1,
  h2,
  h3,
  h4,
  bold,
  style,
  h1Style,
  h2Style,
  h3Style,
  h4Style,
  children,
  medium,
  onPress,
  ...rest
}) => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  const { colors } = useTheme();
  const fontFamily = bold ? 'Poppins_600SemiBold' : 'Poppins_400Regular';
  let textStyle: TextStyle = {};

  if (!fontsLoaded) {
    return <ActivityIndicator size="small" color={colors.text} />;
  }



  if (h1) {
    textStyle = { fontSize: sizes.h1, ...h1Style };
  } else if (h2) {
    textStyle = { fontSize: sizes.h2, ...h2Style };
  } else if (h3) {
    textStyle = { fontSize: sizes.h3, ...h3Style };
  } else if (h4) {
    textStyle = { fontSize: sizes.h4, ...h4Style };
  } else {
    textStyle = { fontSize: sizes.base };
  }

  return (
    <Text
      style={[
        { fontFamily, color: colors.text },
        textStyle,
        style,
      ]}
      onPress={onPress}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default CustomText;
