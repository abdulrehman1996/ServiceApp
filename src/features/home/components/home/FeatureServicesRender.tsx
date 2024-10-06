import { Text } from '@/components/text';
import { ThemeColors } from '@/types';
import { HomeNavigationProps } from '@/types/navigation';
import { wp } from '@/utils/dimensions';
import { useNavigation, useTheme } from '@/utils/packages';
import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { ItemProps } from './AllServicesRender';


interface FeatureServicesRenderProps {
    item: ItemProps
}

const FeatureServicesRender = ({ item }: FeatureServicesRenderProps) => {
    const { name, image, address, timing, distance, ad, category } = item;
    const { colors } = useTheme() as { colors: Partial<ThemeColors> };
    const dispatch = useDispatch()
    const navigation = useNavigation<HomeNavigationProps | any>()
    return (
        <TouchableOpacity activeOpacity={.7} onPress={() => navigation.navigate('ServiceDetail', { item })} style={{ width: wp(70), height: wp(75), marginRight: 15 }}>
            <ImageBackground source={{ uri: image }} style={{ flex: 1, borderRadius: 25, overflow: 'hidden', justifyContent: 'flex-end', padding: 15 }} resizeMode="cover">
                <Text bold style={{ color: colors.background, fontSize: 21 }} numberOfLines={1}>{name}</Text>
                <Text h4 style={{ color: colors.background }} numberOfLines={1}>{address + " - " + distance}</Text>
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