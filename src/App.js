import React from 'react';
import { Router } from '@reach/router';

import './App.css';
import Portfolio from './Portfolio';
import IPATranslator from './apps/IPATranslator/App';

const App = () => {
  return (
    <Router>
      <Portfolio path='/' />
      <IPATranslator path='/ipa' />
    </Router>
  );
};

export default App;
