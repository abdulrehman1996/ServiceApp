import * as React from 'react';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, Text} from 'react-native';
import {white} from '@/config/colors';
import {fonts, lineHeights, sizes} from '@/config/fonts';
import {Button as ButtonRNE} from '@rneui/base';
import {ButtonComponentProps} from '@/types';

function Button(props: ButtonComponentProps) {
  const {
    title,
    secondary,
    size,
    buttonStyle,
    disable,
    titleStyle,
    loadingProps,
    innerRef,
    borderType,
    ...rest
  } = props;
  const {colors} = useTheme();
  const height = size === 'small' ? 41 : 51;
  const bgColor = secondary ? 'green' : colors.primary;
  const textColor = secondary
    ? colors.text
    : borderType
    ? colors.primary
    : white;
  return (
    <ButtonRNE
      {...rest}
      {...(innerRef && {ref: innerRef})}
      title={title}
      buttonStyle={[
        styles.button,
        {
          height: height,
          ...(borderType
            ? {
                borderWidth: 1.3,
                borderColor: bgColor,
                backgroundColor: 'transparent',
              }
            : {backgroundColor: bgColor}),
        },
        buttonStyle,
      ]}
      titleStyle={[
        styles.title,
        {
          fontFamily: fonts.medium,
          color: textColor,
        },
        size === 'small' && styles.titleSmall,
        titleStyle,
      ]}
      disabledStyle={{}}
      disabledTitleStyle={{}}
      loadingProps={{
        color: textColor,
        ...loadingProps,
      }}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
  },
  title: {
    fontSize: sizes.h4,
    lineHeight: lineHeights.h4,
  },
  titleSmall: {
    fontSize: sizes.h5,
    lineHeight: 17,
  },
});

export default Button;
