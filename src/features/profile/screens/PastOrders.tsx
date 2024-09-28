import React from 'react';
import { FlatList, View } from 'react-native';
import OrderHistoryItem from '../components/pastOrders/OrderHistoryItem';
import { ALL_ORDER_HISTORY } from '../assets/dummyData/orderHistory';

const PastOrders = () => {
    return (
        <FlatList
            data={ALL_ORDER_HISTORY}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <OrderHistoryItem order={item} />}
        />
    );
};

export default PastOrders;
