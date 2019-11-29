import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Portfolio from './Portfolio';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Portfolio} />
    </BrowserRouter>
  );
};

export default App;
