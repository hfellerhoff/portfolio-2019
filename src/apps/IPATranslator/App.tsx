import React, { useState } from 'react';
import './App.css';
import PhraseInput from './components/PhraseInput';
import IPADisplay from './components/IPADisplay';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [inputText, setInputText] = useState('');

  return (
    <div className='ipa App'>
      <Header />
      <PhraseInput inputText={inputText} setInputText={setInputText} />
      <IPADisplay inputText={inputText} />
      <Footer />
    </div>
  );
};

export default App;
