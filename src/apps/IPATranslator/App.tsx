import React, { useState } from 'react';
import './App.css';
import PhraseInput from './components/PhraseInput';
import IPADisplay from './components/IPADisplay';
import Header from './components/Header';
import Footer from './components/Footer';
import parseLatin from './util/ParseLatin';
import parseGerman from './util/ParseGerman';
import { Languages } from './constants/Interfaces';
import ParseItalian from './util/ParseItalian';
import ParseFrench from './util/ParseFrench';

const App: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [language, setLanguage] = useState(Languages.Latin);

  const parseText = (text: string) => {
    if (language === Languages.Latin) return parseLatin(text);
    else if (language === Languages.German) return parseGerman(text);
    else if (language === Languages.Italian) return ParseItalian(text);
    else if (language === Languages.French) return ParseFrench(text);
    else return 'Error setting language.';
  };

  return (
    <div className='ipa App'>
      <Header />
      <PhraseInput
        inputText={inputText}
        setInputText={setInputText}
        language={language}
        setLanguage={setLanguage}
      />
      <IPADisplay text={parseText(inputText)} />
      <Footer />
    </div>
  );
};

export default App;
