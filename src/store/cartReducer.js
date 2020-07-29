import { initialState } from './initialState';
import { actionTypes } from '../constants';

const addItem = (state, itemData) => {
  if (!state.itemIds.includes(itemData.itemId)) {
    state.itemIds.push(itemData.itemId);
  }
  if (!state.items[itemData.itemId]) {
    state.items[itemData.itemId] = {
      quantity: 1,
      price: itemData.unitPrice,
      itemName: itemData.itemName,
      itemId: itemData.itemId,
      unit: itemData.unit,
      unitPrice: itemData.unitPrice,
    }
  } else {
    state.items[itemData.itemId] = {
      ...state.items[itemData.itemId],
      quantity: state.items[itemData.itemId].quantity + 1,
      price: state.items[itemData.itemId].price + itemData.unitPrice,
    }
  }
  return {
    itemIds: [...state.itemIds],
    items: { ...state.items },
    totalAmount: state.totalAmount + itemData.unitPrice,
  }
}

const removeItem = (state, itemData) => {
  if (state.itemIds.includes(itemData.itemId) && state.items[itemData.itemId].quantity <= 1) {
    const itemIndex = state.itemIds.indexOf(itemData.itemId);
    state.itemIds.splice(itemIndex , 1);
    delete state.items[itemData.itemId];
  }
  if (state.items[itemData.itemId] && state.items[itemData.itemId].quantity > 1) {
    state.items[itemData.itemId] = {
      ...state.items[itemData.itemId],
      quantity: state.items[itemData.itemId].quantity - 1,
      price: state.items[itemData.itemId].price - itemData.unitPrice,
    }
  }
  return {
    itemIds: [ ...state.itemIds],
    items: { ...state.items },
    totalAmount: state.totalAmount - itemData.unitPrice,
  }
}

const clearCart = (state) => {
  return {
    itemIds: [ ...state.itemIds.splice(0, state.itemIds.length)],
    items: { ...state.items },
    totalAmount: 0,
  }
}


const cartReducer = (state = initialState, action ) => {
  switch (action.type) {
    case actionTypes.addItem:
      console.log('action', action);
      return {
        ...state,
        ...addItem(state, action.payload),
      };
    case actionTypes.removeItem:
      return {
        ...state,
        ...removeItem(state, action.payload)
      };
    case actionTypes.clearCart:
      return {
        ...state,
        totalAmount: 0,
        items: {},
        itemIds: [],
      };
    default:
      return state;
  }
}

export default cartReducer;
