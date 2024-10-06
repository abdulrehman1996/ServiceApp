import Header, { HeaderBack } from "@/components/header";
import { Text } from "@/components/text";
import { FontSize, hp } from "@/utils/dimensions";
import { Icon } from "@/utils/packages";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useRoute, useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import ServicesRender from "../components/serviceDetail/ServicesRender";
import TouchableIcon from "../components/serviceDetail/TouchableIcon";
import AddCartModal from "../components/serviceDetail/AddCartModal";

const Tab = createMaterialTopTabNavigator();

const DetailsTab = ({ service }) => {
    const [selectedService, setSelectedServices] = useState(null);
    return (
        <>
            <FlatList
                data={service.services}
                showsVerticalScrollIndicator={false}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({ item }) => <ServicesRender item={item} onSelect={setSelectedServices} />}
            />
            {/* {selectedService !== null && <AddCartModal visible={true} />} */}
        </>
    );
};

const ServiceDetailTabs = ({ service }) => {
    const { colors } = useTheme();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarIndicatorStyle: { backgroundColor: colors.primary, height: 3 },
                tabBarLabelStyle: { color: colors.text, fontSize: 15 },
            }}
        >
            <Tab.Screen name="Deals">
                {() => <DetailsTab service={service} />}
            </Tab.Screen>
            <Tab.Screen name="Bundles">
                {() => <DetailsTab service={service} />}
            </Tab.Screen>
            <Tab.Screen name="Offers">
                {() => <DetailsTab service={service} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
};

const ServiceDetail = () => {
    const { colors } = useTheme();
    const route = useRoute<any>();
    const service = route.params?.item;

    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            {/* Header */}
            <Header
                leftComponent={<HeaderBack />}
                rightComponent={
                    <TouchableOpacity activeOpacity={0.7}>
                        <Icon name="search" size={FontSize(25)} />
                    </TouchableOpacity>
                }
            />
            {/* <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                scrollEnabled={false}
                stickyHeaderIndices={[0]}
            > */}
            <View style={{ flex: 1 }}>
                {/* Service Header */}
                <View style={{ padding: 20 }}>
                    <View style={styles.serviceHeader}>
                        <View style={{ width: '79%' }}>
                            <Text h2 bold>
                                {service.name}
                            </Text>
                            {service?.timing.map((time, i) => (
                                <Text h4 style={{ marginTop: 5 }} key={i}>
                                    {`${time} `}
                                </Text>
                            ))}
                            <Text h4 style={{ marginTop: 5 }}>
                                {`${service.address} • ${service.distance} • ${service.priceRange}`}
                            </Text>
                        </View>
                        <View>
                            <View
                                style={[
                                    styles.ratingContainer,
                                    { borderColor: colors.primary },
                                ]}
                            >
                                <Icon
                                    name={"star-border"}
                                    size={FontSize(18)}
                                    color={colors.primary}
                                />
                                <Text h4 style={{ color: colors.primary, marginLeft: 5 }}>
                                    {service.reviews.stars}
                                </Text>
                            </View>
                            <Text style={{ color: colors.primary, marginTop: 5 }}>
                                {`${service.reviews.totalReviews} ratings`}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.actionContainer}>
                        <TouchableIcon
                            label={"Call"}
                            icon={<Icon type="feather" name="phone" size={FontSize(24)} />}
                        />
                        <TouchableIcon
                            label={"Direction"}
                            icon={
                                <Icon
                                    type="material-community"
                                    name="map-marker-outline"
                                    size={FontSize(25)}
                                />
                            }
                        />
                        <TouchableIcon
                            label={"Share"}
                            icon={<Icon type="feather" name="share" size={FontSize(24)} />}
                        />
                        <TouchableIcon
                            label={"Favorite"}
                            icon={<Icon type="feather" name="heart" size={FontSize(24)} />}
                        />
                    </View>
                </View>
                {/* Sticky Tab Bar */}
                <ServiceDetailTabs service={service} />
            </View>
        </View>
    );
};

export default ServiceDetail;

const styles = StyleSheet.create({
    serviceHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    ratingContainer: {
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 7,
        borderColor: "primary",
        flexDirection: "row",
        alignItems: "center",
    },
    actionContainer: {
        flexDirection: "row",
        marginTop: hp(3),
        alignItems: "flex-end",
    },
});
