import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Payment from '../containers/Payment';
import Layout from '../components/Layout';

import AppContext from '../context/AppContext';
import initialState from '../initialState';
import useInitialState from '../Hooks/useInitialState';

import '../static/styles/mobile.css';

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout/payment" component={Payment} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
