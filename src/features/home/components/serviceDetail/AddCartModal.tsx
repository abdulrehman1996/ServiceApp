import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'

interface AddCartModal {
    visible: boolean
}

const AddCartModal = ({ visible }) => {
    const { colors } = useTheme();
    return (
        <Modal statusBarTranslucent transparent visible={visible}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: colors.background, padding: 15, borderRadius: 10, width: '80%' }}>

                </View>
            </View>
        </Modal>
    )
}

export default AddCartModal

const styles = StyleSheet.create({})