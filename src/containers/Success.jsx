import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import AppContext from '../context/AppContext';

const Success = () => {
  const { state } = useContext(AppContext);
  const history = useHistory();
    return (
      <>
        <h2>Hello</h2>
      </>
    );

};

export default Success;
