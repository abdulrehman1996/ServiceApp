import { Text } from "@/components/text";
import { useTheme } from "@/utils/packages";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { getToday } from "../../utils/function";

const MyCalendar = ({ onSelectDate }: { onSelectDate: (date: string) => void }) => {
    const { colors } = useTheme();
    const today = getToday();
    const [markedDates, setMarkedDates] = useState<{ [key: string]: any }>({
        [today]: { selected: true, selectedColor: colors.primary },
    });
    const [selected, setSelected] = useState(today);

    const onDayPress = (day: any) => {
        const newMarkedDates = {
            [day.dateString]: { selected: true, selectedColor: colors.primary },
        };
        setMarkedDates(newMarkedDates);
        setSelected(day.dateString);
        onSelectDate(day.timestamp);
    };

    const CustomDay = ({ date, marking }: any) => {
        const { day } = date;
        const isSelected = marking?.selected;

        return (
            <TouchableOpacity
                onPress={() => onDayPress(date)}
                activeOpacity={0.7}
                style={[
                    styles.dayButton,
                    isSelected && { ...styles.selectedDay, borderColor: marking?.selectedColor }
                ]}
            >
                <Text bold={isSelected} style={{ ...styles.dayText, color: isSelected ? colors.text : colors.border }}>
                    {day}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <Calendar
            initialDate={getToday()} // Set initial date to today's date
            style={styles.calendar}
            dayComponent={({ date, marking }: any) => (
                <CustomDay date={date} marking={marking} />
            )}
            markedDates={markedDates}
        />
    );
};

export default MyCalendar;

const styles = StyleSheet.create({
    calendar: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginVertical: 15,
        paddingVertical: 15,
    },
    dayButton: {
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    selectedDay: {
        borderWidth: 1.5,
        width: 30,
        height: 30,
        borderRadius: 5,
    },
    dayText: {
        color: "black",
        fontSize: 16,
    },
    continueButton: {
        marginTop: "30%",
        alignSelf: "center",
        width: "80%",
    },
});
