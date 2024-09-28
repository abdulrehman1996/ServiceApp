declare module 'react-native-flash-message' {
  import {ComponentType} from 'react';
  import {ViewStyle, TextStyle} from 'react-native';

  // Define the props for the FlashMessage component
  interface FlashMessageProps {
    position?: 'top' | 'bottom';
    style?: ViewStyle;
    titleStyle?: TextStyle;
    messageStyle?: TextStyle;
    duration?: number;
    type?: 'success' | 'danger' | 'warning' | 'info' | 'default'; // Add possible types
    title?: string;
    message?: string;
    backgroundColor?: string;
    color?: string;
    textStyle?: TextStyle;
    titleStyle?: TextStyle;
    // Add any other props you expect to use
  }

  // Export the FlashMessage component as default
  const FlashMessage: ComponentType<FlashMessageProps>;

  // Export a method for showing messages
  export function showMessage(props: FlashMessageProps): void;

  export default FlashMessage;
}
