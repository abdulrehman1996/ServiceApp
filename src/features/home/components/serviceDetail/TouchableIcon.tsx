import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface TouchableIconProps {
    icon: JSX.Element,
    label: string,
    onPress?: () => void,
}

const TouchableIcon = ({ onPress, label, icon }: TouchableIconProps) => {
    return (
        <TouchableOpacity activeOpacity={.7} onPress={onPress} style={{ marginRight: '10%', alignItems: 'center' }}>
            {icon}
            <Text style={{ marginTop: 5 }}>{label}</Text>
        </TouchableOpacity>
    )
}

export default TouchableIcon

const styles = StyleSheet.create({})