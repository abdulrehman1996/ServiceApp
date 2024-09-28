import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { Icon } from "@/utils/packages";
import { ThemeColors } from "@/types";
import { OrderHistoryNavigationProps, ProfileStackParamList } from "@/types/navigation";

const OrderHistoryItem = ({ order, upcoming = false, isFav = false }) => {
    const { colors } = useTheme() as { colors: Partial<ThemeColors> };
    const navigation = useNavigation<OrderHistoryNavigationProps>()

    return (
        <TouchableOpacity activeOpacity={.7} onPress={() => isFav ? {} : navigation.navigate('OrderDetail')} style={{ ...styles.container, borderColor: colors.border }}>
            <View style={{ ...styles.container2 }}>
                <View>
                    <Text h4 bold style={[{ color: colors.text }]}>
                        {order.title}
                    </Text>
                    <Text style={[styles.detail, { color: colors.border }]}>
                        {order.location} • {order.distance}
                    </Text>
                    <Text style={[styles.detail, { color: colors.border }]}>
                        {order.services}
                    </Text>
                    <Text style={styles.detail}>
                        {order.date} • {order.price}
                    </Text>
                </View>
                <TouchableOpacity activeOpacity={0.7}>
                    <Icon name={isFav ? "heart" : "heart-o"} type="font-awesome" color={colors.primary} />
                    <Text bold style={[{ color: colors.primary }]}>
                        Favourite
                    </Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 10,
                }}
            >
                {upcoming ? (
                    <TouchableOpacity activeOpacity={.7} onPress={() => { }}>
                        <Text h4 bold style={{ color: colors.error }}>
                            {"Cancel Booking"}
                        </Text>
                    </TouchableOpacity>
                ) : (
                    <View />
                )}
                <Button
                    borderType
                    title={upcoming ? "Reschedule Booking" : isFav ? "Book Now" : "Reorder Booking"}
                    onPress={() => { }}
                    containerStyle={{ minWidth: "35%" }}
                    buttonStyle={{ height: 45 }}
                    titleStyle={{ fontSize: 14 }}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingTop: 25,
        borderBottomWidth: 1,
    },
    container2: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    detail: {
        marginTop: 5,
    },
    reorderButton: {
        marginTop: 10,
        padding: 8,
        borderRadius: 4,
        borderColor: "#ccc",
        borderWidth: 1,
    },
});

export default OrderHistoryItem;
