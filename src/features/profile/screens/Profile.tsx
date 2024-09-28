import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '@/components/header'
import { Icon, Text, useTheme } from '@/utils/packages'
import { ThemeColors } from '@/types'
import { FontSize } from '@/utils/dimensions'

const Profile = ({ navigation }) => {
  const { colors } = useTheme() as { colors: Partial<ThemeColors> }
  return (
    <View style={{ flex: 1, backgroundColor: colors.background2 }}>
      <Header title='Profile' />
      <TouchableOpacity activeOpacity={.7} onPress={() => navigation.navigate('OrderHistory')} style={{ flexDirection: 'row', paddingHorizontal: 15, backgroundColor: colors.background, justifyContent: 'space-between', alignItems: 'center', marginTop: 10, paddingVertical: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name='shopping-bag' type='fontisto' />
          <Text h4 style={{ marginLeft: 10 }}>{"Order History"}</Text>
        </View>
        <Icon name={"chevron-right"} size={FontSize(30)} />
      </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})