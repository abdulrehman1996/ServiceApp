import { Text } from "@/components/text";
import { addItemToCart } from "@/stores/reducers/cart";
import { ThemeColors } from "@/types";
import { HomeNavigationProps } from "@/types/navigation";
import { wp } from "@/utils/dimensions";
import { useNavigation, useTheme } from "@/utils/packages";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

interface AllServicesRenderProps {
    item: ItemProps;
}

export interface ItemProps {
    id?: number,
    pricing?: number;
    name?: string;
    image?: string;
    address?: string;
    timing?: string[];
    distance?: string;
    free?: boolean;
    category?: string;
    ad?: boolean
}

const AllServicesRender = ({ item }: AllServicesRenderProps) => {
    const { name, image, address, timing, distance, free, category } = item;
    const { colors } = useTheme() as { colors: Partial<ThemeColors> };
    const dispatch = useDispatch();
    const navigation = useNavigation<HomeNavigationProps | any>()

    return (
        <TouchableOpacity
            activeOpacity={.7}
            onPress={() => navigation.navigate('ServiceDetail', { item })}
            style={{
                width: wp(45),
                marginTop: 15,
                borderWidth: .2,
                borderColor: colors.border,
                backgroundColor: colors.background,
                padding: 10,
                borderRadius: 15,
            }}
        >
            <Image
                source={{ uri: image }}
                style={{
                    width: "100%",
                    height: wp(45),
                    borderRadius: 5,
                    overflow: "hidden",
                    justifyContent: "flex-end",
                    marginBottom: 10,
                }}
                resizeMode="cover"
            />
            <Text h3 bold numberOfLines={1}>
                {name}
            </Text>
            <Text style={{ marginVertical: 7 }} numberOfLines={1}>
                {address + " - " + distance}
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Text>{timing}</Text>
            </View>
            {free && (
                <View
                    style={{
                        position: "absolute",
                        borderRadius: 10,
                        backgroundColor: colors.primary,
                        paddingHorizontal: 10,
                        paddingVertical: 4,
                        right: 15,
                        top: 15
                    }}
                >
                    <Text bold style={{ color: colors.background }}>
                        {"Free"}
                    </Text>
                </View>
            )}
        </TouchableOpacity>
    );
};

export default AllServicesRender;

const styles = StyleSheet.create({});
