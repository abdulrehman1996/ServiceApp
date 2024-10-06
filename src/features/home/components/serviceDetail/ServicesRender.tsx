import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Text } from "@/components/text";
import { Image } from "@/components/image";
import { wp } from "@/utils/dimensions";
import { useTheme } from "@react-navigation/native";
import { CONSULTANT_DATA } from "@/features/cart/assets/dummyData/consultants";
import AvatarItem from "@/features/cart/components/selectDate/AvatarItem";
import { Button } from "@/components/button";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/stores/reducers/cart";
import { showMessage } from "@/components/message/Message";

interface ServicesRenderProps {
    item: {
        name: string;
        description: string;
        pricing: number;
        image: string;
        timeRequired: string;
    };
    onSelect: (item) => void;
}

const ServicesRender = ({ item, onSelect }: ServicesRenderProps) => {
    console.log("🚀 ~ ServicesRender ~ item:", item);
    const { colors } = useTheme();
    const [isSelected, setisSelecteds] = useState(false);
    const [selectedAvatar, setSelectedAvatar] = useState(0);
    const dispatch = useDispatch();

    const handleCart = () => {
        dispatch(addItemToCart(item));
        showMessage({
            type: 'success',
            message: 'Service added',
            description: 'Service added to cart successfully'
        })
    };

    return (
        <View
            style={{
                margin: 20,
                marginBottom: 0,
                borderBottomWidth: 0.5,
                paddingBottom: 15,
                borderColor: colors.border,
            }}
        >
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setisSelecteds(!isSelected)}
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <View style={{ width: "80%", paddingRight: 10 }}>
                    <Text bold h4>
                        {item?.name}
                    </Text>
                    <Text style={{ marginTop: 5 }}>{item?.description}</Text>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 5,
                            justifyContent: "space-between",
                            width: "90%",
                        }}
                    >
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text bold style={{ marginRight: 5 }}>
                                {"Price:"}
                            </Text>
                            <Text>{`$${item?.pricing}`}</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text bold style={{ marginRight: 5 }}>
                                {"Time required:"}
                            </Text>
                            <Text>{item?.timeRequired}</Text>
                        </View>
                    </View>
                </View>
                <Image
                    image={item?.image}
                    name={item?.name}
                    style={{
                        width: wp(20),
                        height: wp(20),
                        borderRadius: 0,
                        resizeMode: "cover",
                    }}
                />
            </TouchableOpacity>
            {isSelected && (
                <>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.scrollView}
                    >
                        <AvatarItem
                            selected={selectedAvatar === 0}
                            onPress={() => setSelectedAvatar(0)}
                            image={
                                "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
                            }
                            name={"Anyone"}
                            small
                        />
                        <View
                            style={{
                                height: "70%",
                                alignSelf: "center",
                                width: 1,
                                backgroundColor: colors.border,
                                marginHorizontal: 10,
                            }}
                        />
                        {CONSULTANT_DATA.map((specialty) => (
                            <AvatarItem
                                key={specialty.id}
                                selected={selectedAvatar === specialty.id}
                                onPress={() => setSelectedAvatar(specialty.id)}
                                image={specialty.image}
                                name={specialty.name}
                                small
                            />
                        ))}
                    </ScrollView>
                    <Button
                        title="Add to cart"
                        onPress={handleCart}
                        containerStyle={{
                            width: "50%",
                            alignSelf: "center",
                            marginTop: 10,
                        }}
                        buttonStyle={{ height: 45 }}
                    />
                </>
            )}
        </View>
    );
};

export default ServicesRender;

const styles = StyleSheet.create({
    scrollView: {
        marginTop: 10,
        // alignItems: 'center'
    },
});
