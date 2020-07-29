import React from 'react';
import {
  TouchableHighlight,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { addItem, removeItem } from '../../store/actions';


class Button extends React.Component {
  render() {
    console.log('render called', this.props.itemData.itemId);
    if (this.props.quantity === 0) {
      return (
        <TouchableHighlight
          onPress={() => this.props.addItem(this.props.itemData)}
          underlayColor='rgba(0,0,0,0.05)'
        >
          <View
            style={{ 
              ...styles.container,
              ...this.props.style,
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                fontSize: 16,
                color: '#fafafa',
                letterSpacing: 0.6
              }}
            >
              Add
            </Text>
          </View>
        </TouchableHighlight>
      )
    }
    return (
      <View style={{ height: 36, width: 100, flexDirection: 'row' }}>
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => {
            this.props.removeItem(this.props.itemData)
          }}
        >
          <View
            style={{
              height: 36,
              width: 33,
              borderWidth: 2,
              borderColor: 'tomato',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text style={{ fontSize: 20, color: '#000' }}>-</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            width: 33,
            height: 36,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Text>{this.props.quantity}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => {
            this.props.addItem(this.props.itemData)
          }}
        >
          <View
            style={{ 
              height: 36,
              width: 33,
              borderWidth: 2,
              borderColor: 'tomato',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
              <Text>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'tomato',
    height: 36,
    minWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
  updateButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'tomato',
    flexDirection: 'row',
  }
});

const selectQuantity = (items, itemId) => {
  if (items && items[itemId]) {
    return items[itemId].quantity;
  }
  return 0;
}

const mapStateToProps = (state, ownProps) => ({
  quantity: selectQuantity(state.items, ownProps.itemData.itemId),
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (params) => dispatch(addItem(params)),
  removeItem: (params) => dispatch(removeItem(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Button);