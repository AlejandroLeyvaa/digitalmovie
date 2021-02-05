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

  return {
    state,
    addToCart,
    addToFavs,
    addTotal,
    removeItem
  };
};

export default useInitialState;
