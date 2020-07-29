import React from 'react';
import { View, Text, FlatList } from 'react-native';
import AddButton from './AddButton';

const CartItem = ({ item, isLastItem }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 100,
        width: '100%',
        borderBottomWidth: !isLastItem ? 1 : 0,
        borderBottomColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
      }}
    >
      <View style={{ width: '50%' }}>
        <Text
          style={{
            fontSize: 18,
            color: 'rgba(0,0,0,0.8)',
            lineHeight: 27,
          }}
          numberOfLines={2}
        >
          {item.itemName}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: 'rgba(0,0,0,0.4)'
        }}
        >{item.unit}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'rgba(0,0,0,0.8)',
            marginRight: 20
          }}
        >
          {`₹${item.price}`}
        </Text>
        <AddButton itemData={item} />
      </View>
    </View>
  )
}

export default CartItem;