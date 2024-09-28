import {showMessage as showMessageRNFM} from 'react-native-flash-message';
import isObject from 'lodash/isObject';
import isArray from 'lodash/isArray';
import {Platform} from 'react-native';
import {blue, green, red, white, yellow} from '@/config/colors';
import {fonts} from '@/config/fonts';

export function showMessage(props: any) {
  const options = isObject(props) && !isArray(isArray) ? props : {};
  const {type, textStyle, titleStyle, ...rest}: any = options;
  const backgroundColor =
    type === 'danger'
      ? red
      : type === 'warning'
      ? yellow
      : type === 'success'
      ? green
      : blue;
  showMessageRNFM({
    backgroundColor,
    color: white,
    ...rest,
    type: type || 'default',
    textStyle: [
      {
        fontSize: 12,
        fontFamily: fonts.medium,
      },
      textStyle && textStyle,
    ],
    titleStyle: [
      {
        textAlign: 'left',
        fontSize: 14,
        fontFamily: fonts.medium,
        marginTop: Platform.OS === 'ios' ? -27 : 4,
        paddingTop: 0,
      },
      titleStyle && titleStyle,
    ],
    style: {
      marginHorizontal: '10%',
      borderRadius: 10,
      marginTop: Platform.OS === 'ios' ? '11%' : 0,
      paddingTop: 0,
    }, // height:70,
  });
}
