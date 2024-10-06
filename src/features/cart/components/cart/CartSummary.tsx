import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import {
    Modal,
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
} from "react-native";

const CartSummary = ({
    visible,
    onClose,
    cartItems,
    coupon,
    total,
    onBook,
}) => {
    const [selectedPayment, setSelectedPayment] = useState("In-person");
    const { colors } = useTheme();
    const discount = coupon ? 10 : 0;
    const totalAfterDiscount = total - (discount ?? 0);

    const handlePaymentSelection = (method) => {
        setSelectedPayment(method);
        // Here you can navigate to success or failure screen
        // Example: navigation.navigate('SuccessScreen');
    };

    return (
        <Modal visible={visible} transparent={true} animationType="slide">
            <View style={styles.modalContainer}>
                <View
                    style={[styles.modalContent, { backgroundColor: colors.background }]}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text h2 bold style={styles.title}>
                            Cart Summary
                        </Text>
                        <TouchableOpacity onPress={onClose}>
                            <Text h2 bold style={styles.title}>
                                X
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Cart Items */}
                    <FlatList
                        data={cartItems}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) => (
                            <View key={index} style={styles.cartItem}>
                                <Text h4>{item?.item.name}</Text>
                                <Text h4>${item?.item.pricing}</Text>
                            </View>
                        )}
                    />

                    {/* Coupon */}
                    {coupon ? (
                        <Text h3 style={[styles.coupon, { color: colors.notification }]}>
                            Coupon Applied: {coupon}
                        </Text>
                    ) : null}

                    {/* Total Price */}
                    <Text bold style={styles.total}>
                        Total: ${totalAfterDiscount}
                    </Text>

                    {/* Payment Methods */}
                    <Text h3 bold style={styles.paymentTitle}>
                        Select Payment Method
                    </Text>
                    <View style={styles.paymentMethods}>
                        {["In-person", "Online card", "Apple Pay"].map((method) => (
                            <TouchableOpacity
                                key={method}
                                style={[
                                    styles.paymentOption,
                                    selectedPayment === method && {
                                        borderColor: colors.primary,
                                        backgroundColor: colors.card,
                                    },
                                ]}
                                onPress={() => handlePaymentSelection(method)}
                            >
                                <Text>{method}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Close Modal */}
                    <Button title="Book" onPress={onBook} />
                </View>
            </View>
        </Modal>
    );
};

export default CartSummary;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: "80%",
        padding: 20,
        borderRadius: 10,
    },
    title: {
        marginBottom: 10,
    },
    cartItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
    },
    coupon: {
        marginVertical: 10,
    },
    total: {
        fontSize: 18,
        marginVertical: 10,
    },
    paymentTitle: {
        marginTop: 20,
    },
    paymentMethods: {
        marginVertical: 10,
    },
    paymentOption: {
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        marginVertical: 5,
        alignItems: "center",
    },
});
