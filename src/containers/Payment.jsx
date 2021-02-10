import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button';
import { useHistory } from 'react-router-dom';
import config from '../config';

const Payment = () => {
  const { state, removeItem, addNewOrder } = useContext(AppContext);
  const { cart, total, buyer } = state;
  const history = useHistory();
  const clientId = 'AW7OxdrMRuCSrK1bGOBz0hZUIXLEaUkUV0ZPlVduM5M1nPEeC4M9OAnAbUP2CVqee0laXi9g3c33yOPc';

  const paypalOptions = {
    clientId,
    intent: 'capture',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

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
            <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={state.total}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
          </div>
        )}
        <div className="Payment-movies">
          {cart.map((item, index) => (
            <div className="Payment-item" key={Math.random()}>
              <figure>
                <img src={item.image} alt={item.title} />
              </figure>
              <div>
                <h2>{item.title}</h2>
              </div>
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
