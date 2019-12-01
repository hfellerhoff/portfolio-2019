import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Portfolio from './Portfolio';

const App = () => {
  return (
    <BrowserRouter>
      <Route
        path='/ipa'
        component={() => {
          window.location.href = 'https://www.openipa.org';
          return null;
        }}
      />
      <Route path='/' component={Portfolio} />
    </BrowserRouter>
  );
};

export default App;
