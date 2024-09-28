import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ALL_ORDER_HISTORY } from '../assets/dummyData/orderHistory'
import OrderHistoryItem from '../components/pastOrders/OrderHistoryItem'

const UpcomingOrders = () => {
    return (
        <FlatList
            data={ALL_ORDER_HISTORY}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <OrderHistoryItem order={item} upcoming />}
        />
    )
}

export default UpcomingOrders

const styles = StyleSheet.create({})