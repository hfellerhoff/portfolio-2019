import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Portfolio from './Portfolio';
import IPATranslator from './apps/IPATranslator/App';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Portfolio} />
      <Route path='/ipa' component={IPATranslator} />
    </BrowserRouter>
  );
};

export default App;
