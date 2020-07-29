import React from 'react';
import { View, Text } from 'react-native';

const PriceDetails = (props) => {
  return(
    <View style={{ margin: 10, backgroundColor: '#fff' }}>
      <View
        style={{
          height: 48,
          justifyContent: 'center',
          paddingHorizontal: 10,
          borderBottomColor: '#ddd',
          borderBottomWidth: 1,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'rgba(0,0,0,0.4)'}}>
          PRICE DETAILS
        </Text>
      </View>
      <View style={{ paddingVertical: 15, paddingHorizontal: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
          <Text>
            {`Price (${props.itemCount} items)`}
          </Text>
          <Text>
            {`₹${props.totalAmount}`}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>
            Delivery Fee
          </Text>
          <Text style={{ color: 'rgba(79, 186, 88, 0.8)' }}>
            FREE
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 48,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 10,
          borderTopColor: '#ddd',
          borderTopWidth: 1,
        }}
      >
        <Text style={{ fontSize: 16, color: 'rgba(0,0,0,0.7)'}}>
          Total Amount
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'rgba(0,0,0,0.8)'}}>
          {`₹${props.totalAmount}`}
        </Text>
      </View>
    </View>
  )
}

export default PriceDetails;