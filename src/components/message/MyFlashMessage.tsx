import {fonts} from '@/config/fonts';
import React from 'react';
import {Platform} from 'react-native';
import FlashMessage from 'react-native-flash-message';
const MyFlashMessage = ({innerRef, ...rest}: any) => {
  return (
    <FlashMessage
      style={{marginHorizontal: '10%', borderRadius: 10, paddingTop: 0}} //marginTop:-10
      {...(innerRef && {ref: innerRef})}
      position="top"
      textStyle={{
        textAlign: 'left',
        fontSize: 12,
        fontFamily: fonts.medium,
        marginTop: 0,
        paddingVertical: 0,
      }}
      titleStyle={{
        textAlign: 'left',
        fontSize: 14,
        fontFamily: fonts.medium,
        marginTop: Platform.OS == 'ios' ? -14 : 4,
        paddingVertical: 0,
      }}
      {...rest}
    />
  );
};

export default MyFlashMessage;
