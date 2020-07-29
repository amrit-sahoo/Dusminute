import { actionTypes } from '../constants';

const addItem = (payload) => ({
  type: actionTypes.addItem,
  payload,
})

const removeItem = (payload) => ({
  type: actionTypes.removeItem,
  payload,
})

const clearCart = () => ({
  type: actionTypes.clearCart,
})

export { addItem, removeItem, clearCart };