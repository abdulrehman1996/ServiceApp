import React, { useCallback, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '@/components/button/Button';
import { TextInput } from '@/components/input';
import { fonts } from '@/config/fonts';
import { loginSchema } from '@/config/validators';
import { LoginScreenNavigationProps } from '@/types/navigation';
import { FontSize } from '@/utils/dimensions';
import { resetAndGo } from '@/utils/function';;
import { LOGIN } from '../assets/images';
import { LoginInput } from '../types';
import { Icon, zodResolver, useNavigation, useTheme, useForm, KeyboardAwareScrollView } from '@/utils/packages';

const Login = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<LoginScreenNavigationProps>();
  const { control, handleSubmit } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });
  const [hidePassword, setHidePassword] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const togglePwdVisibility = useCallback(() => {
    setHidePassword(prev => !prev);
  }, []);

  const onSubmit = useCallback(
    ({ username, password }: LoginInput) => {
      console.log('===username===', username);
      console.log('===password===', password);
      resetAndGo(navigation, 'Main', '');
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.fullWidth}>
          <View style={styles.innerContainer}>
            <Image source={LOGIN} style={styles.logo} resizeMode="contain" />
            <Text style={[styles.parentHeading, { color: colors.text }]}>
              Welcome back!
            </Text>
            <Text style={[styles.subHeading, { color: colors.text }]}>
              Enter your credentials to access your account!
            </Text>
            <TextInput
              label="Username :"
              name="username"
              placeholder="Type Username..."
              style={styles.textInputMarginTop}
              control={control}
            />
            <TextInput
              label="Password :"
              name="password"
              placeholder="Type Password..."
              style={styles.passwordInputMarginTop}
              iconComponent={
                <Icon
                  name={hidePassword ? 'eye-off' : 'eye'}
                  size={20}
                  color={colors.primary}
                  type='ionicon'
                />
              }
              secureTextEntry={hidePassword}
              onIconClick={togglePwdVisibility}
              control={control}
            />
            <View style={styles.rememberForgotContainer}>
              <View style={styles.rememberMEViewStyle}>
                <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                  <Icon
                    name={isChecked ? 'check-box' : 'check-box-outline-blank'}
                    size={20}
                    color="#525252"
                  />
                </TouchableOpacity>
                <Text style={styles.rememberMeText}>Remember me</Text>
              </View>
              <Text
                onPress={() => navigation.navigate('Forgot')}
                style={styles.forgotpasswordText}>
                Forgot Password?
              </Text>
            </View>
            <Button
              title="Sign In"
              containerStyle={styles.signinButtonStyle}
              onPress={handleSubmit(onSubmit)}
            />
            <View style={styles.bottomView}>
              <Text style={[styles.bottomTextStyle, { color: colors.text }]}>
                Don't have an account?{' '}
                <Text
                  onPress={() => console.log('Signup')}
                  style={[styles.signupTextStyle, { color: colors.primary }]}>
                  Sign up
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F7' },
  scrollViewContent: { flexGrow: 1 },
  fullWidth: {
    flex: 1,
    flexDirection: 'row',
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: '6%',
  },
  logo: {
    marginTop: '28%',
    height: '14%',
    width: '14%',
    alignSelf: 'center',
  },
  parentHeading: {
    fontSize: FontSize(24),
    fontWeight: '600',
    marginBottom: 4,
    alignSelf: 'center',
    fontFamily: fonts.bold,
  },
  subHeading: {
    marginVertical: 4,
    alignSelf: 'center',
    fontFamily: fonts.regular,
    fontSize: 15,
    marginTop: 8,
  },
  textInputMarginTop: {
    marginTop: 24,
  },
  passwordInputMarginTop: {
    marginTop: 12,
  },
  rememberForgotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rememberMEViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginStart: 4,
  },
  signinButtonStyle: {
    marginTop: '12%',
    width: '75%',
    marginStart: '14%',
  },
  forgotpasswordText: {
    fontFamily: fonts.medium,
    alignSelf: 'flex-end',
    color: '#525252',
    fontSize: 15,
  },
  rememberMeText: {
    fontFamily: fonts.medium,
    alignSelf: 'flex-end',
    color: '#525252',
    fontSize: 15,
    marginStart: 4,
    marginBottom: 1,
  },
  bottomView: { flex: 1, justifyContent: 'flex-end', marginBottom: 16 },
  bottomTextStyle: {
    fontFamily: fonts.medium,
    fontWeight: '700',
    alignSelf: 'center',
    fontSize: 15,
  },
  signupTextStyle: {
    fontFamily: fonts.bold,
    textDecorationLine: 'underline',
    fontWeight: '800',
    fontSize: 15,
  },
});

export default Login;
