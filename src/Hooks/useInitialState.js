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


  return {
    state,
    addToCart,
    addToFavs,
  };
};

export default useInitialState;
