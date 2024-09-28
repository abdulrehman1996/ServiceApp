import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import { Text } from '../text';

const TimePicker = ({ onClose, placeholder, containerStyle }) => {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [time, setTime] = useState<any>('');
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => setShowTimePicker(true)}
        style={{ ...styles.datePickerView, ...containerStyle }}>
        <AntDesign
          style={styles.listHeaderIcon}
          name="clockcircleo"
          size={22}
          color={'#000000'}
        />
        <Text style={styles.listHeaderText}>
          {time != '' ? typeof time == 'string' ? time : moment(time)?.format('hh:mm a') : placeholder}
        </Text>
      </TouchableOpacity>
      <DatePicker
        modal
        open={showTimePicker}
        date={new Date()}
        mode={'date'}
        onConfirm={time => {
          setShowTimePicker(false)
          setTime(time);
          onClose(time);
        }}
        onCancel={() => {
          onClose();
        }}
      />
    </>
  );
};
const styles = StyleSheet.create({
  listHeaderText: {
    fontSize: 16,
    color: '#000000',
    padding: 14,
    paddingStart: 10,
    paddingTop: 12
  },
  listHeaderIcon: {
    marginStart: 10,
  },
  datePickerView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,

  }
})

export default TimePicker;
