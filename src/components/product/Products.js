import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import productsData from '../../store/productsData';
import AddButton from '../cart/AddButton';

const ProductItem = (item) => {
  return (
    <View style={{
      marginHorizontal: 10,
      marginVertical: 5,
      padding: 5,
      shadowColor: 'rgba(0,0,0,0.1)',
      shadowRadius: 10,
      elevation: 2,
      borderRadius: 2,
      backgroundColor: '#fafafa',
      flexDirection: 'row',
      height: 140,
    }}>
      <View style={{
        width: '30%',
        height: '100%',
        borderRightColor: '#ddd',
        borderRightWidth: 1,
        alignItems: 'center',
        padding: 5
      }}>
        <Image
          source={{ uri: item.imageUrl }}
          style={{ resizeMode: 'contain', height: '100%', width: '100%' }}
        />
      </View>
      <View style={{
        paddingHorizontal: 10,
        width: '70%',
      }}>
        <Text style={{ fontSize: 18, color: 'rgba(0,0,0,0.8)' }} numberOfLines={2}>
          {item.itemName}
        </Text>
        <Text style={{ fontSize: 16, color: 'rgba(0,0,0,0.5)', letterSpacing: 0.6, lineHeight: 28 }} numberOfLines={1}>
          {item.brandName}
        </Text>
        <Text style={{ fontSize: 14, color: 'rgba(0,0,0,0.3)', letterSpacing: 0.6 }} numberOfLines={1}>
          {item.unit}
        </Text>
        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', paddingTop: 10}}>
          <Text style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)' }}>
            {`₹${item.unitPrice}`}
          </Text>
          <AddButton itemData={item} />
        </View>
      </View>
    </View>
  )
}

function Products() {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        keyExtractor={item => item.itemId}
        data={productsData}
        renderItem={itemData => ProductItem(itemData.item) }
      />
    </View>
  );
}

export default Products;