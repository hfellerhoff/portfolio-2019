import React from 'react';
import parseLatin from '../util/ParseLatin';

interface Props {
  inputText: string;
}

const IPADisplay: React.FC<Props> = ({ inputText }: Props) => {
  const parseText = (text: string) => {
    return parseLatin(text);
  };

  return (
    <div style={{ marginTop: 40 }}>
      <h2 className='ipa header body'>IPA Result:</h2>
      <textarea readOnly className='ipa input' value={parseText(inputText)} />
    </div>
  );
};

export default IPADisplay;
