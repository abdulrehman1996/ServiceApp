import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState, memo } from 'react';
import { Text } from '@/components/text';
import { CONSULTANT_DATA } from '../../assets/dummyData/consultants';
import { wp } from '@/utils/dimensions';
import { Image } from '@/components/image';
import { Icon, useTheme } from '@/utils/packages';

const AvatarItem = ({ selected, onPress, image, name }) => {
    const { colors } = useTheme();

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={styles.avatarContainer}
        >
            <View
                style={[
                    styles.avatar,
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
            </View>
            <Text h4 style={styles.avatarText}>{name}</Text>
            {selected && (
                <View style={[styles.checkmarkContainer, { backgroundColor: colors.notification }]}>
                    <Icon name='check' color={colors.background} size={wp(4)} />
                </View>
            )}
        </TouchableOpacity>
    );
};

const SelectConsultant = ({ item }) => {
    const { colors } = useTheme();
    const [selectedAvatar, setSelectedAvatar] = useState(0);

    return (
        <View style={styles.container}>
            <Text bold h3 style={styles.headerText}>{item.item.name}</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.scrollView}
            >
                <AvatarItem
                    selected={selectedAvatar === 0}
                    onPress={() => setSelectedAvatar(0)}
                    image={'https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg'}
                    name={'Anyone'}
                />
                <View style={{ height: '70%', alignSelf: 'center', width: 1, backgroundColor: colors.border, marginHorizontal: 10 }} />
                {CONSULTANT_DATA.map((specialty) => (
                    <AvatarItem
                        key={specialty.id}
                        selected={selectedAvatar === specialty.id}
                        onPress={() => setSelectedAvatar(specialty.id)}
                        image={specialty.image}
                        name={specialty.name}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default memo(SelectConsultant);

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    headerText: {
        marginLeft: 15,
    },
    scrollView: {
        marginTop: 10,
        // alignItems: 'center'
    },
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
        right: 4,
        top: 0,
        zIndex: 999,
        borderRadius: wp(3),
        width: wp(5),
        height: wp(5),
        justifyContent: 'center',
        alignItems: 'center',
    },
});
