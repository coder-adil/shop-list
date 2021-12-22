import {
  addShopRequest,
  deleteShopRequest,
  getAllShopsRequest,
} from '../actions';

const fetchShops = () => {
  return (dispatch) => {
    let shopList = localStorage.getItem('shopList');
    shopList = shopList ? JSON.parse(shopList) : [];
    return dispatch(getAllShopsRequest(shopList));
  };
};

const addNewShop = (shop) => {
  return (dispatch) => {
    dispatch(addShopRequest());
    let shopList = [];
    if (localStorage.getItem('shopList')) {
      shopList = JSON.parse(localStorage.getItem('shopList'));
    }
    shopList.push(shop);
    localStorage.setItem('shopList', JSON.stringify(shopList));
    return dispatch(fetchShops());
  };
};

const deleteShop = (shopId) => {
  return (dispatch) => {
    dispatch(deleteShopRequest());
    let shopList = localStorage.getItem('shopList');
    shopList = JSON.parse(shopList ? shopList : []);
    const index = shopList.findIndex((shop) => shop.id === shopId);
    shopList.splice(index, 1);
    return localStorage.setItem('shopList', JSON.stringify(shopList));
  };
};

export { fetchShops, addNewShop, deleteShop };
