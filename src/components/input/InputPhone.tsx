// import * as React from 'react';
// import {useTheme} from '@react-navigation/native';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   Platform,
// } from 'react-native';
// import PhoneInput from 'react-native-phone-number-input';
// import { TextInputComponentProps } from '@/types';
// import { Controller } from "react-hook-form";
// import { red } from '@/config/colors';

// function InputPhone(props : TextInputComponentProps) {
//   const {colors} = useTheme();
//   const { name, control, value, setFormattedValue,icon,viewIcon, style, iconComponent, onIconClick, ...rest } = props;
//   const [isFocused, setisFocused] = React.useState(false);

//   const handleFocus = () => setisFocused(true);
//   const handleBlur = () => setisFocused(false);
//   // const renderIcon = (content) =>
//   //   renderNode(Icon, content, {
//   //     size: 20,
//   //     color: colors.thirdText,
//   //   });

//   // const { language } = React.useContext(AuthContext);
//   // const fonts = getFontFamily(language);
//   return (
//     <Controller
//     control={control}
//     // @ts-ignore
//     name={name}
//     // rules={rules}
//     // @ts-ignore
//     render={({
//       field: { value, onChange, onBlur },
//       fieldState: { error }
//     }) => (
//       <>
//     <View
//     style={[
//         styles.content,
//         styles.contentSolid,
//         {borderColor: isFocused ? colors.primary : '#ECEFF4'},
//         style,
//       ]}>
//       <View style={styles.viewRow}>
//         {/* {icon ? (
//           <View style={[styles.viewIcon, viewIcon]}>
//             {renderIcon(icon)}
//           </View>
//         ) : null} */}
//         <View style={styles.viewInput}>
//           <PhoneInput
//             {...rest}
//             // ref={phoneInput}
//             defaultValue={value}
//             defaultCode="AE"
//             layout="first"
//             // @ts-ignore
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//             // onChangeText={text => {
//             //   onChangeText(text);
//             // }}
//             onChangeFormattedText={onChange}
//             value={value}
//             // style={[
//             //     styles.input,
//             //     {
//             //       color: colors.text,...mediumTextFont
//             //     },
//             //     //...mediumTextFont,
//             //     // multiline && styles.inputMultiline,
//             //     // style,
//             //   ]}
//             containerStyle={[
//               styles.input,
//               {
//                 borderRadius: 8,
//                 paddingStart: 4,
//               },
//             ]}
//             textContainerStyle={{
//               flex: 1,
//               paddingVertical: Platform.OS == 'ios' ? 8 : 3,
//               backgroundColor: '#ECEFF4',
//               paddingHorizontal: 0,
//             }}
//             codeTextStyle={{
//               flex: 1,
//               textAlignVertical: 'center',
//               marginTop: Platform.OS === 'ios' ? 0 : 0,
//             }}
//             textInputStyle={{
//               // backgroundColor: colors.background,
//               position: 'absolute',
//               width: 200,
//               left: 40,
//             }}
//             flagButtonStyle={{
//               backgroundColor: '#ECEFF4',
//               width: 60,
//               marginStart: 0,
//             }}
//             // withDarkTheme
//             // withShadow
//             // autoFocus
//           />
//         </View>
//         <TouchableOpacity
//           activeOpacity={0.9}
//           onPress={onIconClick}
//           style={styles.iconSecure}>
//           {iconComponent}
//         </TouchableOpacity>
//       </View>
//     </View>
//     {error && (
//           <Text style={{color:red,marginTop:2, alignSelf:'stretch' , marginStart:8}} >
//             {error.message || "Something went wrong"}
//           </Text>
//         )}
//       </>
//     )}
//   />
  
  
//   );
// }
// const styles = StyleSheet.create({
//   input: {
//     paddingHorizontal: 7,
//     backgroundColor:'#ECEFF4',
//     // fontFamily: defFonts.regular,
//     height: 50,
//   },

//   viewRow: {
//     flexDirection: 'row',
//     paddingHorizontal: 7,
//   },
//   viewIcon: {
//     height: 50,
//     width: 36,
//     justifyContent: 'center',
//   },
//   viewInput: {
//     flex: 1,
//   },
  
//   iconSecure: {
//     paddingHorizontal: 8,
//     justifyContent: 'center',
//   },
//   content: {
//     marginBottom: 4,
//   },
//   contentSolid: {
//     backgroundColor:'#ECEFF4',
//      borderWidth: 1,
//     borderRadius: 8,
//   },
// });


// export default InputPhone;
