import React, { useState } from 'react';
import './App.css';
import PhraseInput from './components/PhraseInput';
import IPADisplay from './components/IPADisplay';
import Header from './components/Header';
import Footer from './components/Footer';
import Description from './components/Description';
import parseLatin from './util/ParseLatin';
import { Languages } from './constants/Interfaces';
import { SAMPLE_LATIN } from './util/Sample';
import { animateScroll } from 'react-scroll';

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

  const onSampleTranscription = () => {
    const animationTime = 500;
    animateScroll.scrollToTop({
      duration: animationTime,
    });
    setTimeout(() => setInputText(SAMPLE_LATIN), animationTime);
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
      <Description onSampleTranscription={onSampleTranscription} />
      <Footer />
    </div>
  );
};

export default App;
