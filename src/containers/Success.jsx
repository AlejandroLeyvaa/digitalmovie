import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import AppContext from '../context/AppContext';

const Success = () => {
  const { state } = useContext(AppContext);
  const { cart, buyer } = state
  const history = useHistory();
    return (
      <div className='Success'>
        <div className='Success-info'>
          <div>
            <h2>User data</h2>
            <h3>{buyer.name} {buyer.lastname}</h3>
            <h3>{buyer.email}</h3>
            <h2>Pedido</h2>
            {cart.map((item) => (
              <div key={Math.random()}>
                <h2>{item.title}: Price ${item.price}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

};

export default Success;
