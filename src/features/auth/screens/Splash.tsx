import React from 'react';
import {
  View,
  Image,
  StatusBar,
  Platform,
} from 'react-native';
import { useNavigation } from '@/utils/packages';
import { LOGIN } from '../assets/images';
import { resetAndGo } from '@/utils/function';
import {
  getLoggedInSessionData,
  getLoggedInSessionToken,
} from '../utils/storage';
import { isEmpty } from 'lodash';
import { wp } from '@/utils/dimensions';
import { LOGO } from '@/assets/images';

const Splash = () => {
  const navigation = useNavigation();
  // const dispatch = useDispatch();
  React.useEffect(() => {
    setTimeout(
      () => {
        redirectScreen();
      },
      Platform.OS === 'ios' ? 1000 : 3000,
    );
    return () => { };
  }, []);

  const redirectScreen = async () => {
    let storedUserToken = await getLoggedInSessionToken();
    let getdUserData = await getLoggedInSessionData();
    if (!isEmpty(storedUserToken)) {
      // dispatch(setUserInfo(getdUserData));
      startAfterDelay('Main');
    } else {
      startAfterDelay('MainTabs');
    }
  };

  const startAfterDelay = (routeName: string) => {
    resetAndGo(navigation, routeName, '');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <StatusBar translucent backgroundColor="transparent" />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff'
        }}>
        <Image source={LOGO} style={{ width: wp(25), height: wp(25) }} />
      </View>
    </View>
  );
};

export default Splash;
