import React from 'react';
import { Result, Word, Phoneme, Line } from '../constants/Interfaces';
import Rules from '../constants/LatinRules';

interface Props {
  result: Result;
}

type PhonemeProps = {
  phoneme: Phoneme;
};
const PhonemeElement = ({ phoneme }: PhonemeProps) => {
  if (phoneme.rule !== Rules.NONE)
    return (
      <div className='ipa display phoneme tooltip'>
        <span className='ipa display phoneme text'>{phoneme.ipa}</span>
        <span className='tooltiptext'>{phoneme.rule}</span>
      </div>
    );
  else {
    return <span className='ipa display phoneme text'>{phoneme.ipa}</span>;
  }
};

type WordProps = {
  word: Word;
};
const WordElement = ({ word }: WordProps) => {
  const syllableElements: JSX.Element[] = [];
  word.syllables.forEach((phoneme, index) => {
    const phonemeElement = <PhonemeElement phoneme={phoneme} key={index} />;
    syllableElements.push(phonemeElement);
  });
  return <span>{syllableElements}</span>;
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
  return <p>{wordElements}</p>;
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
  return <div>{lineElements}</div>;
};

const IPADisplay: React.FC<Props> = ({ result }: Props) => {
  return (
    <>
      <div className='ipa result'>
        <ResultElement result={result} />
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
