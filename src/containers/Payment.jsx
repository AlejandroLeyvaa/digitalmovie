import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { useHistory } from 'react-router-dom';

const Payment = () => {
  const { state, removeItem } = useContext(AppContext);
  const { cart, total } = state;
  const history = useHistory();
  console.log('Payment', state.cart);

  const handleRemove = (item, index) => () => {
    console.log(item, index);
    removeItem(item, index);
  };

  const goTo = (route) => () => {
    history.push(route);
  };

  const touch = (e) => {
    console.log(e);
    e.target.classList.add('touch');
  };

  const touchEnd = (e) => {
    console.log(e);
    e.target.classList.remove('touch');
  };

  return (
    <>
      <section className="Payment">
        <h2 className="Section-title">Payment</h2>
        {cart.length === 0 && (
          <div
            onTouchStart={touch}
            onTouchEnd={touchEnd}
            onClick={goTo('/')}
            className="empty"
          >
            <h2 className="">
              Cart is empty... <br /> Go to add products!!!
            </h2>
          </div>
        )}
        {cart.length > 0 && (
          <div className="Payment-total">
            <h2>Total: {total}</h2>
            <button onClick={goTo('/checkout/success')} className='Payment-total-button'>Buy now</button>
          </div>
        )}
        <div className="Payment-movies">
          {cart.map((item, index) => (
            <div className="Payment-item" key={Math.random()}>
              <div>
                <h2>{item.title}</h2>
              </div>
              <figure>
                <img src={item.figure} alt={item.title} />
              </figure>
              <div>
                <button onClick={handleRemove(item, index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Payment;
