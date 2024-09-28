import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useTheme } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import moment from 'moment';
import { fonts } from '@/config/fonts';
// import { textFont } from '../../utils/Style';
// import { IC_CALANDER } from '../../assets/svg';
const DatePickerText = ({
    date,
    onDataChange,
    containerStyle,
}) => {
  const { colors } = useTheme();
//   const [date, setDate] = useState(placeHolderText);
const [open, setOpen] = useState(false);
  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', ...containerStyle}}
      onPress={() => setOpen(true)}>
        <AntDesign name='calendar' color={colors.text} size={22} />
      {/* <IC_CALANDER style={styles.listHeaderIcon} /> */}
      <Text style={{ ...styles.listHeaderText, color: colors.text }}>
        {moment(date).format('ddd, DD MMM YYYY')}
        <DatePicker
          modal
          open={open}
          date={date ? new Date(moment(date, 'MM/DD/YYYY')) : new Date()}
          mode="date"
          onConfirm={date => {
            setOpen(false);
            onDataChange(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  listHeaderIcon: {
    // marginLeft: 12,
  },
  listHeaderText: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily:fonts.medium,
    // ...textFont,
    marginStart: 8,
  },
  datePickerView: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default DatePickerText;
