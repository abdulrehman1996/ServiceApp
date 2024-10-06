import {
    FlatList,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";
import Header, { HeaderBack } from "@/components/header";
import { Text } from "@/components/text";
import { useSelector } from "react-redux";
import SelectConsultant from "../components/selectDate/SelectConsultant";
import { wp } from "@/utils/dimensions";
import { moment, useNavigation, useTheme } from "@/utils/packages";
import MyCalendar from "../components/selectDate/Calender";
import { ThemeColors } from "@/types";
import { getToday } from "../utils/function";
import { Button } from "@/components/button";

const SelectDate = () => {
    const cartItems = useSelector((state: any) => state.cart.cartItems);
    const today = getToday();
    const { colors } = useTheme() as { colors: Partial<ThemeColors> };
    const [selectedDate, setSelectedDate] = useState<any>(new Date());
    const [selectedTime, setSelectedTime] = useState<string>("12:00");
    const navigation = useNavigation<any>();

    // Generate time slots with 5-minute intervals
    const generateTimeSlots = () => {
        const times = [];
        const startTime = new Date();
        startTime.setHours(0, 0, 0, 0); // Start at 00:00

        for (let i = 0; i < 24 * 60; i += 5) {
            const timeString = moment(startTime).add(i, "minutes").format("HH:mm");
            times.push(timeString);
        }

        return times;
    };

    const timeSlots = generateTimeSlots();

    const handleGoBack = () => {
        navigation.navigate("CartScreen", { selectedDate, selectedTime });
    };

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time);
    };

    return (
        <View style={{ flex: 1 }}>
            <Header
                title="Book an Appointment"
                leftComponent={<HeaderBack />}
                centerComponent={
                    <Text h2 bold style={{ width: wp(65) }}>
                        {"Book an Appointment"}
                    </Text>
                }
            />
            <ScrollView showsHorizontalScrollIndicator={false} style={{ flex: 1 }}>
                <FlatList
                    data={cartItems}
                    scrollEnabled={false}
                    keyExtractor={(_, i) => i.toString()}
                    renderItem={({ item }) => <SelectConsultant item={item} />}
                />
                <MyCalendar onSelectDate={setSelectedDate} />

                {/* Custom Time Picker */}
                <View style={{ paddingHorizontal: 15 }}>
                    <Text h4 bold style={{ marginVertical: 10 }}>
                        Select Time
                    </Text>
                    <FlatList
                        data={timeSlots}
                        keyExtractor={(item) => item}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        alwaysBounceHorizontal
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => handleTimeSelect(item)}
                                style={[
                                    styles.timeSlot,
                                    {
                                        backgroundColor:
                                            selectedTime === item ? colors.primary : colors.secondary,
                                    },
                                ]}
                            >
                                <Text
                                    bold
                                    style={{
                                        color:
                                            selectedTime === item ? colors.background : colors.text,
                                    }}
                                >
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: 15,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            padding: 15,
                            width: wp(20),
                            alignItems: "center",
                            backgroundColor: colors.secondary,
                            borderWidth: 1,
                            borderColor: colors.primary,
                            borderRadius: 6,
                        }}
                    >
                        <Text bold>{selectedTime}</Text>
                    </TouchableOpacity>
                    <Button
                        onPress={handleGoBack}
                        title={"Confirm"}
                        containerStyle={{ width: "30%" }}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default SelectDate;

const styles = StyleSheet.create({
    timeSlot: {
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ccc",
    },
});
