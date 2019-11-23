import React, { useState } from 'react';
import './App.css';
import PhraseInput from './components/PhraseInput';
import IPADisplay from './components/IPADisplay';
import Header from './components/Header';
import Footer from './components/Footer';
import parseLatin from './util/ParseLatin';
import parseGerman from './util/ParseGerman';
import { Languages, Result } from './constants/Interfaces';
import parseItalian from './util/ParseItalian';
import parseFrench from './util/ParseFrench';

const App: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [language, setLanguage] = useState(Languages.Latin);

  const parseText = (text: string) => {
    // if (language === Languages.Latin)
    return parseLatin(text);
    // else if (language === Languages.German) return parseGerman(text);
    // else if (language === Languages.Italian) return parseItalian(text);
    // else if (language === Languages.French) return parseFrench(text);
    // else return 'Error setting language.';
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
      <IPADisplay result={parseText(inputText)} />
      <Footer />
    </div>
  );
};

export default App;
