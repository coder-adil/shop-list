import React from 'react';
import ShopList from '../components/ShopList';
import { Button } from 'react-bootstrap';

const App = () => (
  <div className="container mt-4">
    <div className="col text-center">
      <h1>Shop List Application</h1>
    </div>
    <div className="col mt-4">
      <ShopList />
    </div>
  </div>
);

export default App;
