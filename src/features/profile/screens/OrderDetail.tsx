import React from "react";
import { View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "@/components/header";
import { Icon } from "@rneui/themed";
import { Text } from "@/components/text";
import { FontSize, wp } from "@/utils/dimensions";
import { ThemeColors } from "@/types";

const OrderDetail = () => {
    const { colors } = useTheme() as { colors: Partial<ThemeColors> };
    const { goBack } = useNavigation();

    return (
        <View style={{ ...styles.container, backgroundColor: colors.background }}>
            <Header
                leftComponent={
                    <View style={{ marginLeft: 10, alignItems: "flex-start" }}>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => goBack()}>
                            <Icon name="close" type="iomicons" color={colors.text} />
                        </TouchableOpacity>
                        <Text h2 bold style={{ width: wp(50), marginTop: 10 }}>
                            Order Details
                        </Text>
                    </View>
                }
            />

            <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 20, paddingTop: 0 }}>
                {/* Order Info */}

                <View style={styles.shopInfo}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Text bold h3>
                            Woodlands Hills Salon
                        </Text>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Icon name="heart-o" type="font-awesome" color={colors.text} />
                            <Text bold>Favourite</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity activeOpacity={0.7} style={styles.shopService}>
                        <Icon
                            name="store-mall-directory"
                            size={FontSize(18)}
                            color={colors.text}
                        />
                        <Text h4 bold style={styles.shopServiceText}>
                            Shop Service
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.dateTimeRow}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Icon
                                type="feather"
                                name="calendar"
                                size={FontSize(18)}
                                color={colors.text}
                            />
                            <Text h4 bold style={styles.shopServiceText}>
                                September 24, 2024
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Order Items */}
                <View style={styles.orderItems}>
                    {[1, 2].map(() => {
                        return (
                            <OrderItem title="Haircut" price="$160" quantity="2" priceperpiece="$80" />
                        )
                    })}
                </View>

                {/* Price Summary */}
                <PriceSummary itemTotal="$320" discount="-$100" grandTotal="$210" />

                {/* Reorder Button */}
                <TouchableOpacity style={styles.reorderButton}>
                    <Text style={styles.reorderText}>Reorder Booking</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

// Reusable component for displaying individual order items
const OrderItem = ({ title, price, quantity, priceperpiece }) => {
    const { colors } = useTheme();
    return (
        <View style={styles.orderItem}>
            <View>
                <Text bold h4 style={{ color: colors.text, marginBottom: 5 }}>
                    {title}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ paddingVertical: 2, paddingHorizontal: 6, borderRadius: 3, borderWidth: 1, borderColor: colors.notification }}>
                        <Text style={{ color: colors.notification }}>{quantity}</Text>
                    </View>
                    <Text style={{ color: colors.border }}>{" x " + priceperpiece}</Text>
                </View>
            </View>
            <Text h4 bold>
                {price}
            </Text>
        </View>
    );
};

// Reusable component for displaying price summary
const PriceSummary = ({ itemTotal, discount, grandTotal }) => {
    const { colors } = useTheme();
    return (
        <View style={{ ...styles.priceSummary, borderColor: colors.border }}>
            <View style={styles.priceRow}>
                <Text>Item total</Text>
                <Text h4>{itemTotal}</Text>
            </View>
            <View style={styles.priceRow}>
                <Text h4>Coupon Discount (NEW100)</Text>
                <Text h4 style={{ color: colors.notification }}>{discount}</Text>
            </View>
            <View style={{ ...styles.priceRow, borderTopWidth: 1, borderColor: colors.border, paddingTop: 10, marginTop: 10 }}>
                <Text h4 style={styles.grandTotalLabel}>
                    Grand Total
                </Text>
                <Text h4 style={styles.grandTotalValue}>
                    {grandTotal}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    shopInfo: {
        marginBottom: 16,
    },
    shopService: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
    },
    shopServiceText: {
        marginLeft: 8,
        marginVertical: 5,
    },
    dateTimeRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 16,
        borderBottomWidth: 0.2,
        borderTopWidth: 0.2,
        paddingVertical: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    favorite: {
        fontSize: 12,
    },
    orderInfo: {
        marginBottom: 20,
    },
    salonName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    orderDetailRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },
    detailText: {
        marginLeft: 8,
        fontSize: 14,
    },
    orderItems: {
        marginBottom: 20,
    },
    orderItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 5,
    },
    priceSummary: {
        borderTopWidth: 1,
        paddingTop: 15,
        marginBottom: 20,
    },
    priceRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    grandTotalLabel: {
        fontWeight: "bold",
    },
    grandTotalValue: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },
    reorderButton: {
        backgroundColor: "#6200ee",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
    },
    reorderText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default OrderDetail;
