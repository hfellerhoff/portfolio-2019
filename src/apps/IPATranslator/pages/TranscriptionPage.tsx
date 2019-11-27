import React, { useState, useEffect } from 'react';
import { RouteComponentProps, Redirect } from 'react-router';
import { Languages, Result } from '../constants/Interfaces';
import TextInput from '../components/TextInput';
import ResultDisplay from '../components/ResultDisplay/ResultDisplay';
import parseLatin from '../util/ParseLatin';
import parseFrench from '../util/ParseFrench';

import './TranscriptionPage.scss';
import createPDFFromResult from '../util/CreatePDF';
import copyResult from '../util/CopyResult';

type Props = {
  language: string;
};

const TranscriptionPage: React.FC<RouteComponentProps<Props>> = ({
  match: {
    params: { language },
  },
}) => {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState<Result>({
    lines: [
      {
        words: [
          {
            syllables: [],
          },
        ],
      },
    ],
  });
  const [resultHeight, setResultHeight] = useState(0);

  const parseText = () => {
    switch (language as Languages) {
      case Languages.Latin:
        setResult(parseLatin(inputText));
        break;
      case Languages.French:
        setResult(parseFrench(inputText));
        break;
      default:
        setResult(parseLatin(inputText));
        break;
    }
  };

  const getNote = (): string => {
    switch (language as Languages) {
      case Languages.Latin:
        return '';
      case Languages.French:
        return 'Transcription for French is still incomplete, and may be lacking transcription rules and exceptions.';
      default:
        return '';
    }
  };

  useEffect(() => {
    parseText();
  }, [inputText]);

  if (language in Languages) {
    return (
      <div className='ipa__transcription__container'>
        <h1 className='ipa__transcription__title'>
          {language + ' Transcription'}
        </h1>
        <p className='ipa__transcription__note'>{getNote()}</p>
        <div className='ipa__transcription__input-container'>
          <div className='ipa__transcription__input-container-left'>
            <h3 className='ipa__transcription__input-title'>Text Input</h3>
            <TextInput
              inputText={inputText}
              setInputText={setInputText}
              height={resultHeight}
            />
          </div>
          <div className='ipa__transcription__input-container-right'>
            <h3 className='ipa__transcription__input-title'>
              IPA Transcription
            </h3>
            <ResultDisplay
              result={result}
              setHeight={height => setResultHeight(height)}
            />
          </div>
        </div>
        <div className='ipa__transcription__export-container'>
          <button
            onClick={() => createPDFFromResult(language as Languages, result)}
            className='ipa__transcription__export-button'
          >
            Export as PDF
          </button>
          <div style={{ width: 15, height: 15 }}></div>
          <button
            onClick={() => copyResult(result)}
            className='ipa__transcription__export-button'
          >
            Copy
          </button>
        </div>
      </div>
    );
  } else {
    return <Redirect to='/ipa' />;
  }
};

export default TranscriptionPage;
