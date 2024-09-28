import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Text } from "@/components/text";
import { useTheme } from "@/utils/packages";

interface ComponentHeaderProps {
    label: string;
    onPress: () => void;
}

const ComponentHeader = (props: ComponentHeaderProps) => {
    const { label, onPress } = props;
    const { colors } = useTheme();
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: 20,
            }}
        >
            <Text h2 bold>
                {label}
            </Text>
            <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
                <Text h2 bold style={{ color: colors.border }}>
                    See All
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default ComponentHeader;

const styles = StyleSheet.create({});
