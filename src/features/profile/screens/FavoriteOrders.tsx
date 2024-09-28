import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ALL_ORDER_HISTORY } from '../assets/dummyData/orderHistory'
import OrderHistoryItem from '../components/pastOrders/OrderHistoryItem'

const FavoriteOrders = () => {
    return (
        <FlatList
            data={ALL_ORDER_HISTORY}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <OrderHistoryItem order={item} isFav />}
        />
    )
}

export default FavoriteOrders

const styles = StyleSheet.create({})