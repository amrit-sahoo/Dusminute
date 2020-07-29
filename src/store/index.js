import { createStore } from 'redux'
import cartReducer from './cartReducer';
import thunk from 'redux-thunk';

const store = createStore(cartReducer);

export default store;