export const initialState = {
  totalAmount: 0,
  items: {},
  itemIds: [],
}

export function Item(item) {
  this.itemId = item.itemId;
  this.itemName = item.itemName;
  this.quantity = item.quantity;
  this.price = item.price;
}