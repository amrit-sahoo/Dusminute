import React from 'react';
import { View, Text, FlatList, ScrollView, Alert } from 'react-native';
import { connect } from 'react-redux';
import PriceDetails from './PriceDetails';
import { clearCart } from '../../store/actions';
import CartItem from './CartItem';
import Button from '../common/Button';

class Cart extends React.Component {
  render() {
    console.log('this.props.itemsIds', this.props.itemIds);
    if (this.props.itemIds && this.props.itemIds.length === 0) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Cart is empty</Text>
        </View>
      )
    }
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View
            style={{
              margin: 10,
              padding: 5,
              shadowColor: 'rgba(0,0,0,0.1)',
              shadowRadius: 10,
              elevation: 2,
              borderRadius: 2,
              backgroundColor: '#fafafa',
            }}
          >
            <FlatList
              keyExtractor={item => item}
              data={this.props.itemIds}
              renderItem={itemData => CartItem({ item: this.props.items[itemData.item], isLastItem: itemData.index === this.props.itemIds.length - 1   }) }
            />
          </View>
          <PriceDetails itemCount={this.props.itemIds.length} totalAmount={this.props.totalAmount} />
        </ScrollView>
        <Button
          text='Place Order'
          onPress={() => {
            this.props.clearCart();
            Alert.alert(
              "Order Placed",
              "Order Placed",
              [
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ],
              { cancelable: false }
            );    
          }}
          style={{
            margin: 10,
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
  itemIds: state.itemIds,
  totalAmount: state.totalAmount,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => (dispatch(clearCart()))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);