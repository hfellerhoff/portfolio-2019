import React, { useState, useEffect, CSSProperties } from 'react';
import Rules from '../../constants/LatinRules';
import { Word, Line, Result } from '../../constants/Interfaces';

import './ResultDisplay.scss';
import useWindowDimensions from '../UseWindowDimensions';

type PhonemeProps = {
  text: string;
  rule: string;
  isIPA: boolean;
  theme: 'light' | 'dark';
};
const PhonemeElement = ({ text, rule, isIPA, theme }: PhonemeProps) => {
  const textClassName = `ipa__result-display-text--${theme}`;
  const tooltipClassName = `ipa__result-tooltip ipa__result-tooltip--${theme}`;
  const tooltipTextClassName = `ipa__result-tooltip-text ipa__result-tooltip-text--${theme}`;

  const getText = () => {
    return isIPA ? (
      <span className={textClassName}>{text}</span>
    ) : (
      <span className={textClassName}>{text}</span>
    );
  };

  if (rule !== Rules.NONE)
    return (
      <div className={tooltipClassName}>
        {getText()}
        <span className={tooltipTextClassName}>{rule}</span>
      </div>
    );
  else return getText();
};

type WordProps = {
  word: Word;
  theme: 'light' | 'dark';
};
const WordElement = ({ word, theme }: WordProps) => {
  const originalSyllableElements: JSX.Element[] = [];
  const syllableElements: JSX.Element[] = [];
  word.syllables.forEach((phoneme, index) => {
    const phonemeElement = (
      <PhonemeElement
        isIPA
        text={phoneme.ipa}
        rule={phoneme.rule}
        key={index}
        theme={theme}
      />
    );
    syllableElements.push(phonemeElement);

    const originalPhonemeElement = (
      <PhonemeElement
        isIPA={false}
        text={phoneme.text}
        rule={phoneme.rule}
        key={index}
        theme={theme}
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
  theme: 'light' | 'dark';
};
const LineElement = ({ line, theme }: LineProps) => {
  const wordElements: JSX.Element[] = [];
  line.words.forEach((word, index) => {
    const wordElement = <WordElement word={word} key={index} theme={theme} />;
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
  theme?: 'light' | 'dark';
  setHeight?: (height: number) => void;
  shouldHide?: boolean;
};
const ResultElement = ({
  result,
  theme = 'light',
  setHeight,
  shouldHide,
}: DisplayProps) => {
  const [displayRef, setDisplayRef] = useState<HTMLDivElement>(
    document.createElement('div')
  );

  const { width } = useWindowDimensions();
  const isWidthSmallEnough = width <= 800 ? true : false;
  const visibleStyle: CSSProperties = {
    visibility: 'visible',
  };
  const hiddenStyle: CSSProperties = {
    height: 100,
    visibility: 'hidden',
    margin: -170,
  };

  const style = isWidthSmallEnough && shouldHide ? hiddenStyle : visibleStyle;

  const lineElements: JSX.Element[] = [];
  result.lines.forEach((line, index) => {
    const lineElement = <LineElement line={line} key={index} theme={theme} />;
    lineElements.push(lineElement);
  });

  const className = `ipa__result-display--${theme}`;

  useEffect(() => {
    if (displayRef && setHeight) {
      const height = displayRef.offsetHeight;
      setHeight(height - 40); // the -40 is to account for difference between textarea and div
    }
  }, [result, displayRef, setHeight]);

  return (
    <div
      id='result'
      className={className}
      ref={display => setDisplayRef(display ? display : displayRef)}
      style={style}
    >
      {lineElements}
    </div>
  );
};

export default ResultElement;