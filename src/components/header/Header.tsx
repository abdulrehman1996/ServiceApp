import { white } from '@/config/colors';
import { fonts, shadowStyle } from '@/config/fonts';
import { HeaderComponentProps } from '@/types';
import { FontSize, wp } from '@/utils/dimensions';
import { useTheme } from '@react-navigation/native';
import { Header as HeaderRNE } from '@rneui/base';
import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Text } from '../text';
import Entypo from 'react-native-vector-icons/Entypo'
import HeaderBack from './HeaderBack';
const Header = (props: HeaderComponentProps) => {
  const { colors } = useTheme()

  const { containerStyle, title, leftComponent, centerComponent, rightComponent, headingStyle, leftComponentStyle, ...rest } = props;
  return (
    <HeaderRNE
      backgroundColor={colors.background}
      leftComponent={leftComponent ?? <View style={{ alignItems: 'flex-start', width: wp(40), ...leftComponentStyle }}>
        <HeaderBack />
        <Text bold h2 style={{ marginTop: 10 }}>{title}</Text>
      </View>}
      centerComponent={centerComponent ? centerComponent : <></>}
      rightComponent={rightComponent ? rightComponent : <></>}

      containerStyle={{ paddingVertical: 16, paddingTop: 4, ...shadowStyle.shadow, shadowOpacity: 0 }} />
  );
};

export default Header;