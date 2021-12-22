import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, ListGroup } from 'react-bootstrap';
import { fetchShops, deleteShop } from '../api';
import AddShop from './AddShop';
import SPToast from './SPToast';

const ShopList = () => {
  const [addShopModal, setAddShopModal] = useState(false);
  const dispatch = useDispatch();
  const shopList = useSelector((state) => state.reducer.shopList);
  const [toast, setToast] = useState(false);

  const handleAddShopModal = () => setAddShopModal((prevState) => !prevState);

  const getAllShops = () => dispatch(fetchShops());

  const handleDeleteShop = (shopId) => {
    dispatch(deleteShop(shopId));
    setToast((preState) => !preState);
    getAllShops();
  };

  useEffect(() => {
    getAllShops();
  }, []);

  return (
    <>
      {shopList?.length <= 0 && (
        <div className="col mt-4 text-center">
          <h4>No shops found click on Add Shop</h4>
        </div>
      )}
      <ListGroup as="ol" numbered>
        {shopList?.map((shop) => (
          <ListGroup.Item
            as="li"
            key={shop.id}
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold"> {shop.name}</div>
              {shop.category} - {shop?.area}
            </div>
            <Button variant="danger" onClick={() => handleDeleteShop(shop.id)}>
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="col mt-4">
        <Button variant="primary" onClick={handleAddShopModal}>
          Add Shop
        </Button>
      </div>
      <AddShop
        addShopModal={addShopModal}
        handleAddShopModal={handleAddShopModal}
      />
      <SPToast
        toast={toast}
        setToast={setToast}
        message="Shop deleted successfully."
        variant="danger"
      />
    </>
  );
};

export default ShopList;
