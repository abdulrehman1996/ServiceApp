import React, {useState} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
// import { textFont } from '../../assets/utils/Style';
const DatePickerView = ({onClose, containerStyle, placeHolderText, fromFilterScreen}) => {
  const [showDatePicker, setshowDatePicker] = useState(false);
  const [date, setDate] = useState('');
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => setshowDatePicker(true)}
        style={{...styles.datePickerView, ...containerStyle}}>
        {fromFilterScreen? 
        <> 
        <Text style={styles.listHeaderText}>
        {date != ''?  typeof date == 'string' ? date : moment(date)?.format('MM-DD-YYYY'):placeHolderText }

        </Text>
        <Ionicons
          style={[styles.listHeaderIcon,{marginEnd:12}]}
          name="calendar"
          size={22}
          color={'#000000'}
        />
        </>:
         <> 
        <Ionicons
          style={styles.listHeaderIcon}
          name="calendar"
          size={22}
          color={'#000000'}
        />
        <Text style={styles.listHeaderText}>
        {date != ''?  typeof date == 'string' ? date : moment(date)?.format('MM-DD-YYYY'):placeHolderText }
        {/* {placeHolderText === ' '? '':date} */}
        </Text>
        </> }
      </TouchableOpacity>
      <DatePicker
        modal
        open={showDatePicker}
        date={new Date()}
        mode={'date'}
        onConfirm={date => {
          setshowDatePicker(false);
          setDate(moment(date)?.format('MM-DD-YYYY'));
          onClose(date);
        }}
        onCancel={() => {
          onClose();
          setshowDatePicker(false);
        }}
      />
    </>
  );
};
const styles = StyleSheet.create({
  listHeaderText: {
    fontSize: 16,
    // ...textFont,
    color: '#000000',
    padding: 14,
    paddingStart: 10,
    // marginBottom:12
  },
  listHeaderIcon: {
    marginStart: 10,
    marginTop:4
  },
  datePickerView: {
   
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,

  },
});

export default DatePickerView;
