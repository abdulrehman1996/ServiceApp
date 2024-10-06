import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import { Image } from '@/components/image';
import { Text } from '@/components/text';
import { Icon } from '@/utils/packages';
import { wp } from '@/utils/dimensions';

export const AvatarItem = ({ selected, onPress, image, name, small = false }) => {
    const { colors } = useTheme();

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={styles.avatarContainer}
        >
            <View
                style={[
                    small ? styles.smallAvatar : styles.avatar,
                    {
                        borderColor: selected ? colors.notification : colors.border,
                    },
                ]}
            >
                <Image
                    image={image}
                    name={name}
                    style={styles.avatarImage}
                />
                {selected && (
                    <View style={[small ? styles.smallcheckmarkContainer : styles.checkmarkContainer, { backgroundColor: colors.notification }]}>
                        <Icon name='check' color={colors.background} size={wp(small ? 3 : 4)} />
                    </View>
                )}
            </View>
            <Text h4 style={{ ...styles.avatarText, fontSize: small ? 14 : 16 }}>{name}</Text>
        </TouchableOpacity>
    );
};


export default AvatarItem

const styles = StyleSheet.create({
    avatarContainer: {
        marginLeft: 10,
        marginRight: 5,
        alignItems: 'center',
    },
    avatar: {
        width: wp(17),
        height: wp(17),
        borderRadius: wp(9),
        borderWidth: 2,
    },
    smallAvatar: {
        width: wp(13),
        height: wp(13),
        borderRadius: wp(9),
        borderWidth: 2,
    },
    avatarImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: wp(9),
    },
    avatarText: {
        marginTop: 5,
    },
    checkmarkContainer: {
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 999,
        borderRadius: wp(3),
        width: wp(5),
        height: wp(5),
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallcheckmarkContainer: {
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 999,
        borderRadius: wp(2),
        width: wp(4),
        height: wp(4),
        justifyContent: 'center',
        alignItems: 'center',
    },
})