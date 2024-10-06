import { LOGO } from "@/assets/images";
import { Text } from "@/components/text";
import { FontSize, wp } from "@/utils/dimensions";
import { Icon, useTheme } from "@/utils/packages";
import React from "react";
import {
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View
} from "react-native";
import { SERVICES_DATA } from "../assets/dummyData/ServicesData";
import AllServicesRender from "../components/home/AllServicesRender";
import ComponentHeader from "../components/home/ComponentHeader";
import FeatureServicesRender from "../components/home/FeatureServicesRender";
import { ThemeColors } from "@/types";
import Header from "@/components/header";

const Home = () => {
    const { colors } = useTheme() as { colors: Partial<ThemeColors> }

    return (
        <View style={styles.container}>
            <Header title="" leftComponent={<></>} />
            <ScrollView
                style={[styles.innerContainer, { backgroundColor: colors.background }]}
            >
                <View style={styles.header}>
                    <View style={styles.logoContainer}>
                        <Image source={LOGO} style={styles.logo} />
                        <Text h2 bold>
                            {"Mike Hanna"}
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity activeOpacity={.7}>
                            <Icon
                                name="bell"
                                type="feather"
                                size={FontSize(24)}
                                style={styles.bellIcon}
                                color={colors.text}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.7}>
                            <Icon
                                name="bookmark-minus-outline"
                                type="material-community"
                                size={FontSize(27)}
                                color={colors.text}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <ComponentHeader label="Featured" onPress={() => { }} />
                <View>
                    <FlatList
                        data={SERVICES_DATA}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        keyExtractor={(_, i) => i.toString()}
                        renderItem={({ item }) => <FeatureServicesRender item={item} />}
                    />
                </View>
                <ComponentHeader label="Popular Businesses" onPress={() => { }} />
                <View>
                    <FlatList
                        data={[{ category: "All" }, ...SERVICES_DATA]}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        keyExtractor={(_, i) => i.toString()}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity activeOpacity={.7} style={styles.categories}>
                                    <Text h4>{item.category}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
                {/* <View style={{ backgroundColor: colors.background2 }}> */}
                <FlatList
                    data={SERVICES_DATA}
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(_, i) => i.toString()}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    renderItem={({ item }) => <AllServicesRender item={item} />}
                />
                {/* </View> */}
            </ScrollView>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 15,
        paddingTop: 0,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    logo: {
        height: wp(13),
        width: wp(13),
        resizeMode: "center",
        marginRight: 10,
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    bellIcon: {
        marginRight: 10,
    },
    categories: {
        borderWidth: .5,
        paddingHorizontal: 11,
        paddingVertical: 11,
        borderRadius: 11,
        marginRight: 10
    }
});
