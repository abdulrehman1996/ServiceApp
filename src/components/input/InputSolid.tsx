import * as React from 'react';
import {useTheme} from '@react-navigation/native';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {TextInputComponentProps} from '@/types';
import {Controller} from 'react-hook-form';
import {red} from '@/config/colors';
import {fonts} from '@/config/fonts';

function InputSolid(props: TextInputComponentProps) {
  const {colors} = useTheme();
  const {
    name,
    control,
    icon,
    viewIcon,
    rules,
    style,
    multiline,
    secureTextEntry,
    iconComponent,
    label,
    onIconClick,
    editableStatus,
    ...rest
  } = props;
  const [isFocused, setisFocused] = React.useState(false);

  const handleFocus = () => setisFocused(true);
  const handleBlur = () => setisFocused(false);

  return (
    <Controller
      control={control}
      // @ts-ignore
      name={name}
      rules={rules}
      // @ts-ignore
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <View style={{...style}}>
          <Text style={styles.labelStyle}>{label}</Text>
          <View
            style={[
              styles.content,
              styles.contentSolid,
              {borderColor: isFocused ? colors.primary : '#BDBDBD'},
            ]}>
            <View style={styles.viewRow}>
              <View style={styles.viewInput}>
                <TextInput
                  {...rest}
                  multiline={multiline}
                  editable={!editableStatus}
                  secureTextEntry={secureTextEntry}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholderTextColor={colors.border}
                  style={[
                    styles.input,
                    {
                      color: colors.text,
                    },
                    multiline && styles.inputMultiline,
                  ]}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={onIconClick}
                style={styles.iconSecure}>
                {iconComponent}
              </TouchableOpacity>
            </View>
          </View>
          {error && (
            <Text
              style={{
                color: red,
                marginTop: 2,
                alignSelf: 'stretch',
                marginStart: 8,
              }}>
              {error.message || 'Something went wrong'}
            </Text>
          )}
        </View>
      )}
    />
  );
}
const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 7,
    backgroundColor: '#FFFFFF',
    height: 52,
    borderRadius: 32,
  },
  labelStyle: {
    fontFamily: fonts.medium,
    fontWeight: '500',
    fontSize: 16,
    color: '#000000',
    paddingBottom: 12,
  },
  inputMultiline: {
    height: 122,
    textAlignVertical: 'top',
    paddingTop: 14,
    paddingBottom: 14,
    lineHeight: 24,
  },
  viewRow: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingBottom: 1,
  },
  viewIcon: {
    height: 46,
    width: 36,
    justifyContent: 'center',
  },
  viewInput: {
    flex: 1,
  },
  iconSecure: {
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  content: {
    marginBottom: 4,
  },
  contentSolid: {
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    borderWidth: 1.5,
  },
});

export default InputSolid;
