import {
  GET_ALL_SHOPS_FAILURE,
  GET_ALL_SHOPS_REQUEST,
  GET_ALL_SHOPS_SUCCESS,
  ADD_SHOP_FAILURE,
  ADD_SHOP_REQUEST,
  ADD_SHOP_SUCCESS,
  DELETE_SHOP_FAILURE,
  DELETE_SHOP_REQUEST,
  DELETE_SHOP_SUCCESS,
} from '../constants';

export const getAllShopsRequest = (response) => ({
  type: GET_ALL_SHOPS_REQUEST,
  response,
});

export const getAllShopsSuccess = (response) => ({
  type: GET_ALL_SHOPS_SUCCESS,
  response,
});

export const getAllShopsFailure = (error) => ({
  type: GET_ALL_SHOPS_FAILURE,
  error,
});

export const addShopRequest = (request) => ({
  type: ADD_SHOP_REQUEST,
  request,
});

export const addShopSuccess = (response) => ({
  type: ADD_SHOP_SUCCESS,
  response,
});

export const addShopFailure = (error) => ({
  type: ADD_SHOP_FAILURE,
  error,
});

export const deleteShopRequest = (request) => ({
  type: DELETE_SHOP_REQUEST,
  request,
});

export const deleteShopSuccess = (response) => ({
  type: DELETE_SHOP_SUCCESS,
  response,
});

export const deleteShopFailure = (error) => ({
  type: DELETE_SHOP_FAILURE,
  error,
});
