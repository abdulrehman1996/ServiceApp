import {AlertProps} from '@/types';
import * as React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';

const Alert = ({
  visible,
  title,
  description,
  buttons,
  onRequestClose = () => {},
}: AlertProps) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onRequestClose}>
      <View style={styles.overlay}>
        <View style={styles.alertBox}>
          {title && <Text style={styles.title}>{title}</Text>}
          {description && <Text style={styles.description}>{description}</Text>}
          <View
            style={[
              styles.buttonContainer,
              buttons.length === 2 ? styles.twoButtons : styles.singleButton,
            ]}>
            {buttons.map((button, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  ...styles.button,
                  width: buttons?.length == 2 ? '50%' : '100%',
                  borderRightWidth:
                    buttons.length === 2 && index == 0 ? 0.5 : 0,
                }}
                onPress={button.onPress}
                accessibilityLabel={button.text}>
                <Text style={[styles.buttonText, button.textStyle]}>
                  {button.text}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  alertBox: {
    width: 270,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    color: '#000',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
  },
  twoButtons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  singleButton: {
    justifyContent: 'center',
  },
  button: {
    borderTopWidth: 0.5,
    borderColor: 'lightgray',
    width: '100%',
    padding: 11,
  },
  buttonText: {
    fontSize: 18,
    color: '#007AFF',
    textAlign: 'center',
  },
});

export default Alert;
