import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/utils/packages';
import { wp } from '@/utils/dimensions';
import { Text } from '@/components/text';
import { ThemeColors } from '@/types';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '@/stores/reducers/cart';
import { ItemProps } from './AllServicesRender';


interface FeatureServicesRenderProps {
    item: ItemProps
}

const FeatureServicesRender = ({ item }: FeatureServicesRenderProps) => {
    const { name, image, address, timing, distance, ad, category } = item;
    const { colors } = useTheme() as { colors: Partial<ThemeColors> };
    const dispatch = useDispatch()
    return (
        <TouchableOpacity activeOpacity={.7} onPress={() => dispatch(addItemToCart(item))} style={{ width: wp(70), height: wp(75), marginRight: 15 }}>
            <ImageBackground source={{ uri: image }} style={{ flex: 1, borderRadius: 25, overflow: 'hidden', justifyContent: 'flex-end', padding: 15 }} resizeMode="cover">
                <Text h2 bold style={{ color: colors.background }} numberOfLines={1}>{name}</Text>
                <Text h4 style={{ color: colors.background, marginVertical: 7 }} numberOfLines={1}>{address + " - " + distance}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text h4 style={{ color: colors.background }}>{timing}</Text>
                    {ad && <Text h4 style={{ color: colors.background, backgroundColor: colors.waiting, paddingHorizontal: 10, paddingVertical: 2 }}>{"Ad"}</Text>}
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
};

export default FeatureServicesRender

const styles = StyleSheet.create({})