import { combineReducers } from 'redux';
import {
  GET_ALL_SHOPS_REQUEST,
  ADD_SHOP_REQUEST,
  DELETE_SHOP_REQUEST,
} from '../constants';

const initialState = {
  shopList: [],
  success: null,
  error: null,
};
const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case GET_ALL_SHOPS_REQUEST:
      return { ...state, shopList: action.response };
    case ADD_SHOP_REQUEST:
      return { ...state, shopList: action.response };
    case DELETE_SHOP_REQUEST:
      return { ...state, shopList: action.response };
    default:
      return state;
  }
};

export default combineReducers({ reducer });
