import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState, memo } from 'react';
import { Text } from '@/components/text';
import { CONSULTANT_DATA } from '../../assets/dummyData/consultants';
import { wp } from '@/utils/dimensions';
import { Image } from '@/components/image';
import { Icon, useTheme } from '@/utils/packages';
import AvatarItem from './AvatarItem';


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
});
