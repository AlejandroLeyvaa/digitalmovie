import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import initialState from '../initialState';
import useInitialState from '../Hooks/useInitialState';


import '../static/styles/mobile.css';

const App = () => {
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
