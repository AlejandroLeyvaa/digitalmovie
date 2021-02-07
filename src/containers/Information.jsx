import React, { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const history = useHistory();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      lastname: formData.get('lastname'),
      email: formData.get('email'),
      address: formData.get('address'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer);
    history.push('/checkout/payment');
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-title">
          <h2>Contact</h2>
        </div>
        <div className="Information-form">
          <form className="Form" ref={form}>
            <label htmlFor="name">
              <span aria-label="First Name">First Name</span>
              <input
                className="Form-input"
                type="text"
                placeholder="Alejandro"
                name="name"
              />
            </label>
            <label htmlFor="lastname">
              <span aria-label="Last Name">Last Name</span>
              <input
                className="Form-input"
                type="text"
                placeholder="Leyva"
                name="lastname"
              />
            </label>
            <label htmlFor="email">
              <span aria-label="e-mail">e-mail</span>
              <input
                className="Form-input"
                type="text"
                placeholder="random-email@gmail.com"
                name="email"
              />
            </label>
            <label htmlFor="country">
              <span aria-label="Country">Country</span>
              <input
                className="Form-input"
                type="text"
                placeholder="México"
                name="country"
              />
            </label>
            <label htmlFor="country">
              <span aria-label="State">State</span>
              <input
                className="Form-input"
                type="text"
                placeholder="Sinaloa"
                name="state"
              />
            </label>
            <label htmlFor="city">
              <span aria-label="City">City</span>
              <input
                className="Form-input"
                type="text"
                placeholder="Culiacán"
                name="city"
              />
            </label>
            <label htmlFor="address">
              <span aria-label="Address">Address</span>
              <input
                className="Form-input"
                type="text"
                placeholder="Random"
                name="address"
              />
            </label>
            <label htmlFor="cp">
              <span aria-label="Postal Code">Postal Code</span>
              <input
                className="Form-input"
                type="text"
                placeholder="80000"
                name="cp"
              />
            </label>
            <label htmlFor="phone">
              <span aria-label="Phone Number">Phone Number</span>
              <input
                className="Form-input"
                type="text"
                placeholder="667"
                name="phone"
              />
            </label>
          </form>
        </div>
        <div className="Information-buttons">
          <Link to="/">
            <button type="button" className="button">
              Return
            </button>
          </Link>
          <button className="button" type="button" onClick={handleSubmit}>
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Information;
