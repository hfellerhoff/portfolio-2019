import React from 'react';
import { Result, Word, Line, Languages } from '../constants/Interfaces';
import Rules from '../constants/LatinRules';
import createPDFFromResult from '../util/CreatePDF';
import copyResult from '../util/CopyResult';

interface Props {
  result: Result;
  language: Languages;
}

type PhonemeProps = {
  text: string;
  rule: string;
  isIPA: boolean;
};
const PhonemeElement = ({ text, rule, isIPA }: PhonemeProps) => {
  const getText = () => {
    return isIPA ? (
      <span className='ipa display phoneme text'>{text}</span>
    ) : (
      <span className='ipa display phoneme original-text'>{text}</span>
    );
  };

  if (rule !== Rules.NONE)
    return (
      <div className='ipa display phoneme tooltip'>
        {getText()}
        <span className='tooltiptext'>{rule}</span>
      </div>
    );
  else return getText();
};

type WordProps = {
  word: Word;
};
const WordElement = ({ word }: WordProps) => {
  const originalSyllableElements: JSX.Element[] = [];
  const syllableElements: JSX.Element[] = [];
  word.syllables.forEach((phoneme, index) => {
    const phonemeElement = (
      <PhonemeElement
        isIPA
        text={phoneme.ipa}
        rule={phoneme.rule}
        key={index}
      />
    );
    syllableElements.push(phonemeElement);

    const originalPhonemeElement = (
      <PhonemeElement
        isIPA={false}
        text={phoneme.text}
        rule={phoneme.rule}
        key={index}
      />
    );
    originalSyllableElements.push(originalPhonemeElement);
  });
  return (
    <div className='ipa display phoneme block'>
      <div>{originalSyllableElements}</div>
      <div>{syllableElements}</div>
    </div>
  );
};

type LineProps = {
  line: Line;
};
const LineElement = ({ line }: LineProps) => {
  const wordElements: JSX.Element[] = [];
  line.words.forEach((word, index) => {
    const wordElement = <WordElement word={word} key={index} />;
    const spaceElement = (
      <span style={{ margin: '0px 5px' }} key={(index + 0.5).toString()}></span>
    );
    wordElements.push(wordElement);
    wordElements.push(spaceElement);
  });
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>{wordElements}</div>
  );
};

type DisplayProps = {
  result: Result;
};
const ResultElement = ({ result }: DisplayProps) => {
  const lineElements: JSX.Element[] = [];
  result.lines.forEach((line, index) => {
    const lineElement = <LineElement line={line} key={index} />;
    lineElements.push(lineElement);
  });
  return <div id='result'>{lineElements}</div>;
};

const IPADisplay: React.FC<Props> = ({ result, language }: Props) => {
  return (
    <>
      <h2 className='ipa header body' style={{ marginTop: 30 }}>
        Transcription result:{' '}
      </h2>
      <div className='ipa result display'>
        <ResultElement result={result} />
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
