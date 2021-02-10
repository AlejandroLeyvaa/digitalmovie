import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import AppContext from '../context/AppContext';

const Success = () => {
  const { state } = useContext(AppContext);
  const { cart, buyer } = state;
  const history = useHistory();
  return (
    <div className="Success">
      <div className="Success-info">
        <div>
          <h2>User data</h2>
          <h3>
            {buyer.name} {buyer.lastname}
          </h3>
          <h3>{buyer.email}</h3>
          <h2>Items</h2>
          <div className="Success-info-table">
            <h2>Movie</h2>
            <h2>Price</h2>
          </div>
            {cart.map((item) => (
              <div className="Success-info-table" key={Math.random()}>
                <h2>{item.title}</h2>
                <h2>Price ${item.price}</h2>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Success;
