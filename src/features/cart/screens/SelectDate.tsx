import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header, { HeaderBack } from '@/components/header'
import { Text } from '@/components/text'
import { useSelector } from 'react-redux'
import SelectConsultant from '../components/selectDate/SelectConsultant'
import { wp } from '@/utils/dimensions'
import { moment, useNavigation, useTheme } from '@/utils/packages'
import MyCalendar from '../components/selectDate/Calender'
import { ThemeColors } from '@/types'
// import DatePicker from 'react-native-date-picker'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { getToday } from '../utils/function'
import { Button } from '@/components/button'

const SelectDate = () => {
    const cartItems = useSelector((state: any) => state.cart.cartItems)
    const today = getToday();
    const { colors } = useTheme() as { colors: Partial<ThemeColors> }
    const [selectedDate, setSelectedDate] = useState<any>(new Date());;

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedTime, setSelectedTime] = useState(new Date())
    const navigation = useNavigation<any>();


    const handleGoBack = () => {
        // Set parameters for the previous screen
        navigation.navigate("Cart", { selectedDate, selectedTime });

        // Then go back to the previous screen
        // navigation.goBack();
    };

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setSelectedTime(date)
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };
    return (
        <View style={{ flex: 1, }}>
            <Header title='Book an Appointment' leftComponent={<HeaderBack />} centerComponent={<Text h2 bold>{'Book an Appointment'}</Text>} />
            <ScrollView showsHorizontalScrollIndicator={false} style={{ flex: 1 }}>
                <FlatList
                    data={cartItems}
                    scrollEnabled={false}
                    keyExtractor={(_, i) => i.toString()}
                    renderItem={({ item }) => <SelectConsultant item={item} />}
                />
                <MyCalendar onSelectDate={setSelectedDate} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15, }}>
                    <TouchableOpacity onPress={showDatePicker} style={{ padding: 15, width: wp(20), alignItems: 'center', backgroundColor: colors.secondary, borderWidth: 1, borderColor: colors.primary, borderRadius: 6 }}>
                        <Text bold>{moment(selectedTime).format("HH:mm")}</Text>
                    </TouchableOpacity>
                    <Button onPress={handleGoBack} title={"Confirm"} containerStyle={{ width: '30%' }} />
                </View>
            </ScrollView>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="time"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    )
}

export default SelectDate

const styles = StyleSheet.create({})