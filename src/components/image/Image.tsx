import { SmartImageProps } from '@/types';
import React from 'react';
import {
  View,
  Text,
  Image,
  ImageProps,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Platform,
  useWindowDimensions,
} from 'react-native';

const SmartImage: React.FC<SmartImageProps> = ({
  image,
  name,
  style,
  ...props
}) => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const getInitials = (name: string): string => {
    const words = name.split(' ');
    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    }
    return (words[0][0] + words[1][0]).toUpperCase();
  };

  const renderInitials = (initials: string, width: number, height: number) => {
    const fontSize = Math.min(width, height) * 0.5;
    return (
      <View
        style={[
          styles.initialsContainer,
          { width, height, borderRadius: height / 2 },
          style,
        ]}
        accessible
        accessibilityLabel={`Initials: ${initials}`}>
        <Text style={[styles.initialsText, { fontSize }]}>{initials}</Text>
      </View>
    );
  };

  let imageSource: { uri: string } | number | null = null;

  if (typeof image === 'string') {
    if (image.startsWith('http://') || image.startsWith('https://')) {
      imageSource = { uri: image };
    } else if (
      image.startsWith('file://') ||
      (Platform.OS === 'android' && image.startsWith('/'))
    ) {
      imageSource = { uri: `file://${image}` };
    }
  } else if (typeof image === 'number') {
    imageSource = image;
  } else {
    imageSource = image as { uri: string };
  }

  const containerWidth =
    style && (style as any).width ? (style as any).width : windowWidth * 0.2;
  const containerHeight =
    style && (style as any).height ? (style as any).height : windowHeight * 0.2;

  if (imageSource) {
    return (
      <Image
        style={[
          styles.image,
          style,
          { width: containerWidth, height: containerHeight },
        ]}
        source={imageSource}
        {...props}
        accessible
        accessibilityLabel="Image"
      />
    );
  } else if (name) {
    return renderInitials(getInitials(name), containerWidth, containerHeight);
  } else {
    return renderInitials('?', containerWidth, containerHeight);
  }
};

const styles = StyleSheet.create({
  initialsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    overflow: 'hidden',
  },
  initialsText: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default SmartImage;
