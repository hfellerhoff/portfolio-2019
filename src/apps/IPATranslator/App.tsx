import React from 'react';
import './App.scss';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar/Navbar';
import TranscriptionPage from './pages/TranscriptionPage';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/ipa' component={LandingPage} />
        <Route path='/ipa/:language' component={TranscriptionPage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
