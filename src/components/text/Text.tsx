import { fonts, sizes } from '@/config/fonts';
import { CustomTextProps } from '@/types';
import { FontSize } from '@/utils/dimensions';
import { useTheme, Text } from '@/utils/packages';
import * as React from 'react';
import { TextStyle } from 'react-native';

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
  const fontFamily = bold ? fonts.bold : fonts.regular;
  const fontWeight = bold ? '600' : '400';
  const { colors } = useTheme();
  let textStyle: TextStyle = {};

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
        { fontFamily: fontFamily, fontWeight: fontWeight, color: colors.text },
        textStyle,
        style,
      ]}
      onPress={onPress}
      {...rest}>
      {children}
    </Text>
  );
};

export default CustomText;
