import React, { useState } from "react";
import {
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet,
    SafeAreaView,
} from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { Text } from "@/components/text";
import Header from "@/components/header";
import { Icon, moment, useDispatch, useNavigation, useSelector, useTheme } from "@/utils/packages";
import { FontSize, wp } from "@/utils/dimensions";
import { addItemToCart, decreaseQuantity, resetCart } from "@/stores/reducers/cart";
import { SERVICES_DATA } from "@/features/home/assets/dummyData/ServicesData";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { Button } from "@/components/button";
import { Alert } from "@/components/alert";

const Cart = () => {
    const { colors } = useTheme();
    const cartItems = useSelector((state: any) => state.cart.cartItems);
    const grandTotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<any>();
    const route = useRoute<any>();
    const params = route.params;
    const [alert, setAlert] = useState(false);
    const dispatch = useDispatch();

    useFocusEffect(() => {
        console.log("PARAMS", params?.selectedTime);
        console.log("PARAMS", params?.selectedDate);
        if (params) {
            setSelectedTime(params?.selectedTime);
            setSelectedDate(params?.selectedDate);
        }
    });

    return (
        <View style={styles.container}>
            <Header title="Checkout" />
            {cartItems.length > 0 ? (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ShopInfo selectedDate={selectedDate} />
                    <ServiceList services={cartItems} colors={colors} />
                    <CouponCode code="FREE10" discount={40} colors={colors} />
                    <FrequentlyAdded colors={colors} />
                    <OrderSummary
                        itemTotal={112}
                        couponDiscount={10}
                        colors={colors}
                        total={grandTotal}
                    />
                    <BottomButton
                        colors={colors}
                        total={grandTotal}
                        quantity={cartItems.length}
                        selectedDate={selectedDate}
                        selectedTime={selectedTime}
                    />
                    {selectedDate && selectedTime && (
                        <Button
                            title={"Book Now"}
                            onPress={() => setAlert(true)}
                            containerStyle={{ marginTop: 10 }}
                            buttonStyle={{ width: "90%", alignSelf: "center" }}
                        />
                    )}
                    <Alert
                        visible={alert}
                        description={"Your service has been booked"}
                        title={"Successful"}
                        buttons={[{ text: "ok", onPress: () => { setAlert(false), dispatch(resetCart()) } }]}
                    />
                </ScrollView>
            ) : (
                <View
                    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                >
                    <Text h1 bold>
                        {"Cart is empty!"}
                    </Text>
                </View>
            )}
        </View>
    );
};
// Shop Info component
const ShopInfo = ({ selectedDate = undefined }) => {
    const { colors } = useTheme();
    const navigation = useNavigation<any>();

    return (
        <View style={styles.shopInfo}>
            <Text bold h3>
                Woodlands Hills Salon
            </Text>
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
            <TouchableOpacity activeOpacity={0.7} onPress={() => {
                navigation.navigate("SelectDate")
            }} style={styles.dateTimeRow}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Icon
                        type="feather"
                        name="calendar"
                        size={FontSize(18)}
                        color={colors.text}
                    />
                    <Text h4 bold style={styles.shopServiceText}>
                        {selectedDate ? moment(selectedDate).format("MMM DD, YYYY") : 'Select Date & Time'}
                    </Text>
                </View>
                <Icon name="chevron-right" color={colors.primary} size={FontSize(22)} />
            </TouchableOpacity>
        </View>
    );
};

// Service List component
const ServiceList = ({ services, colors }) => {
    const dispatch = useDispatch();
    return (
        <View style={styles.serviceList}>
            {services.map((service, index) => (
                <View key={index} style={styles.serviceItem}>
                    <View>
                        <Text h4 bold style={styles.serviceName}>
                            {service.item.name}
                        </Text>
                        <Text h4 style={styles.servicePrice}>
                            ${service.item.price}
                        </Text>
                    </View>
                    <View style={{ alignItems: "flex-end" }}>
                        <View
                            style={{ ...styles.quantityRow, borderColor: colors.primary }}
                        >
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => dispatch(decreaseQuantity(service.item.id))}
                            >
                                <Entypo name="minus" size={18} color="purple" />
                            </TouchableOpacity>
                            <Text h4 style={styles.quantityText}>
                                {service.quantity}
                            </Text>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => dispatch(addItemToCart(service.item))}
                            >
                                <Entypo name="plus" size={18} color="purple" />
                            </TouchableOpacity>
                        </View>
                        <Text h4 style={styles.servicePrice}>
                            ${service.totalPrice}
                        </Text>
                    </View>
                </View>
            ))}
        </View>
    );
};

// Coupon Code Component
const CouponCode = ({ code, discount, colors }) => (
    <View style={{ ...styles.coupon, borderColor: colors.background2 }}>
        <View style={{ flexDirection: "row" }}>
            <Icon
                name="check-circle"
                type="feather"
                color={colors.notification}
                size={FontSize(26)}
            />
            <View style={{ marginLeft: 10 }}>
                <Text bold h3>
                    Code {code} Applied!
                </Text>
                <Text style={{ color: colors.border, fontSize: 12, marginTop: 5 }}>
                    Coupon Applied Successfully
                </Text>
            </View>
        </View>
        <View style={{ alignItems: "flex-end" }}>
            <Text bold h4 style={{ color: colors.notification }}>
                -${discount}
            </Text>
            <TouchableOpacity activeOpacity={0.7}>
                <Text bold style={{ color: colors.primary }}>
                    Remove
                </Text>
            </TouchableOpacity>
        </View>
    </View>
);

// Frequently Added Together component
const FrequentlyAdded = ({ colors }) => (
    <View
        style={{
            padding: 15,
            borderBottomWidth: 5,
            borderColor: colors.background2,
        }}
    >
        <Text h3 bold style={{ marginBottom: 10 }}>
            Frequently added together
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {SERVICES_DATA.slice(2, 5).map((product) => (
                <View key={product.id} style={styles.productContainer}>
                    <Image source={{ uri: product.image }} style={styles.productImage} />
                    <Text h4 style={styles.productPrice}>
                        ${product.price}
                    </Text>
                    <TouchableOpacity
                        style={{
                            ...styles.selectButton,
                            backgroundColor: colors.primary,
                        }}
                    >
                        <Text style={styles.selectButtonText}>Select +</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    </View>
);

// Order Summary component
const OrderSummary = ({ itemTotal, couponDiscount, colors, total }) => (
    <View style={styles.summaryContainer}>
        <View style={styles.summary2Container}>
            <Text h4>Item total</Text>
            <Text h4>${total ?? 0}</Text>
        </View>
        <View style={styles.summary2Container}>
            <Text h4>Coupon Discount</Text>
            <Text h4 style={{ color: colors.notification }}>
                -${couponDiscount}
            </Text>
        </View>
        <View style={styles.summary2Container}>
            <Text h2 bold style={{ fontSize: 20 }}>
                Amount Payable
            </Text>
            <Text h2 bold style={{ fontSize: 20 }}>
                ${total - couponDiscount > 0 ? total - couponDiscount : 0}
            </Text>
        </View>
    </View>
);

// Bottom Button
const BottomButton = ({
    colors,
    total,
    quantity,
    selectedDate,
    selectedTime,
}) => {
    const { navigate } = useNavigation<any>();
    return (
        <View style={{ ...styles.bottomButton, backgroundColor: colors.primary }}>
            <View
                style={{
                    ...styles.bottomButton,
                    backgroundColor: colors.primary,
                    padding: 0,
                }}
            >
                <View
                    style={{
                        borderColor: colors.background,
                        borderWidth: 1,
                        borderRadius: 10,
                        width: wp(10),
                        height: wp(10),
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text h3 bold style={{ color: colors.background }}>
                        {quantity}
                    </Text>
                </View>
                <View style={{ marginLeft: 15 }}>
                    <Text h3 bold style={{ color: colors.background }}>
                        ${total}
                    </Text>
                    <Text h4 style={{ color: colors.background, marginTop: 5 }}>
                        {"plus taxes"}
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => {
                    navigate("SelectDate");
                }}
                activeOpacity={0.7}
            >
                {selectedDate && selectedTime ? (
                    <View style={{ alignItems: "flex-end" }}>
                        <Text bold h3 style={{ color: colors.background }}>
                            {moment(selectedDate).format("MMM DD, YYYY")}
                        </Text>
                        <Text bold h4 style={{ color: colors.background, marginTop: 5 }}>
                            {moment(selectedTime).format("HH:mm")}
                        </Text>
                    </View>
                ) : (
                    <Text bold h3 style={{ color: colors.background }}>
                        {"Select Date & Time"}
                    </Text>
                )}
            </TouchableOpacity>
        </View>
    );
};

export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    shopInfo: {
        marginVertical: 16,
        paddingHorizontal: 15,
    },
    shopTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    shopService: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
    },
    shopServiceText: {
        marginLeft: 8,
    },
    dateTimeRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 16,
        borderBottomWidth: 0.2,
        borderTopWidth: 0.2,
        paddingVertical: 15,
    },
    dateTimeText: {
        marginLeft: 8,
        fontSize: 14,
    },
    serviceList: {
        paddingBottom: 16,
        paddingHorizontal: 15,
    },
    serviceItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 16,
    },
    serviceName: {
        // fontSize: 16,
    },
    quantityRow: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 10,
    },
    quantityText: {
        marginHorizontal: 8,
    },
    servicePrice: {
        // fontSize: 16,
        marginTop: 5,
    },
    coupon: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        borderTopWidth: 5,
        borderBottomWidth: 5,
        paddingHorizontal: 15,
    },
    removeCouponText: {},
    frequentlyText: {
        fontSize: 16,
        marginTop: 16,
    },
    productContainer: {
        marginRight: 16,
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    productPrice: {
        marginTop: 8,
    },
    selectButton: {
        padding: 8,
        borderRadius: 8,
        marginTop: 8,
    },
    selectButtonText: {
        color: "#fff",
    },
    summaryContainer: {
        marginTop: 16,
        paddingHorizontal: 15,
    },
    summary2Container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    summaryAmount: {
        fontSize: 16,
    },
    discountAmount: {
        fontSize: 16,
        color: "green",
    },
    bottomButton: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
    },
});
