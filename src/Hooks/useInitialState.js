import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const addToFavs = (payload) => {
    setState({
      ...state,
      favs: [...state.favs, payload],
    });
  };

  const addTotal = (payload) => {
    setState({
      ...state,
      total: payload
    })
  };

  const removeItem = (payload, indexToRemove) => {
    setState({
      ...state,
      cart: state.cart.filter((items, currentIndex) => currentIndex !== indexToRemove),
      total: state.total - payload.price,
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: Object.assign(state.buyer, payload)
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload]
    });
  };

  return {
    state,
    addToCart,
    addToFavs,
    addTotal,
    removeItem,
    addToBuyer,
    addNewOrder
  };
};

export default useInitialState;
