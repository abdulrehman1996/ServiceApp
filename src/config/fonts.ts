import { Platform, StyleSheet } from "react-native";

export const fonts = {
  light:'PlusJakartaSans-Light',
  regular: "PlusJakartaSans-Regular",
  medium: "PlusJakartaSans-Medium",
  bold: "PlusJakartaSans-Bold",
  extrabold: "PlusJakartaSans-Bold",
  semiBold:'PlusJakartaSans-SemiBold.ttf',
};


// export const getFontFamily = (language: string) => {
//   // if (language === "ar") return arFonts;
//   // if (language === "ur") return urFonts;
//   return defFonts;
// };
export const sizes = {
  base: 14,
  h1: 28,
  h2: 24,
  h3: 18,
  h4: 16,
  h5: 14,
  h6: 12,
  h7: 10,
};

export const lineHeights = {
  h1: 34,
  h2: 29,
  h3: 22,
  h4: 19,
  h5: 24,
  h6: 18,
  h7: 16,
};

export const shadowStyle = StyleSheet.create({
  shadow: {
    shadowColor: 'rgba(127,136,144,.3)',
    shadowOffset: {
      height: 3,
      width: 0,
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
    elevation: 1,
  },
  shadow4: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 3,
  },
});
// export const lineHeights = {
//   h1: Platform.isPad ? 44 : 34,
//   h2: Platform.isPad ? 40 : 29,
//   h3: Platform.isPad ? 30 : 22,
//   h4: Platform.isPad ? 28 : 19,
//   h5: Platform.isPad ? 24 : 24,
//   h6: Platform.isPad ? 20 : 18,
//   h7: Platform.isPad ? 23 : 16,
// };
