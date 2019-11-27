import React from 'react';
import { Result, Languages } from '../constants/Interfaces';
import createPDFFromResult from '../util/CreatePDF';
import copyResult from '../util/CopyResult';
import ResultDisplay from './ResultDisplay/ResultDisplay';

interface Props {
  result: Result;
  language: Languages;
}

const IPADisplay: React.FC<Props> = ({ result, language }: Props) => {
  return (
    <>
      <h2 className='ipa header body' style={{ marginTop: 30 }}>
        Transcription result:{' '}
      </h2>
      <div className='ipa result display'>
        <ResultDisplay result={result} />
      </div>
      <div className='ipa result button-container'>
        <button
          onClick={() => createPDFFromResult(language, result)}
          className='ipa result button'
        >
          Export as PDF
        </button>
        <button
          onClick={() => copyResult(result)}
          className='ipa result button'
        >
          Copy
        </button>
      </div>

      <p className='ipa details'>
        <em>
          <strong>Hint:</strong> Hover over IPA to get transcription rules!
        </em>
      </p>
    </>
  );
};

export default IPADisplay;
