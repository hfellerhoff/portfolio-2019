import React from 'react';
import parseLatin from '../util/ParseLatin';

interface Props {
  text: string;
}

const IPADisplay: React.FC<Props> = ({ text }: Props) => {
  return (
    <div style={{ marginTop: 40 }}>
      <h2 className='ipa header body'>IPA Result:</h2>
      <textarea readOnly className='ipa input' value={text} />
    </div>
  );
};

export default IPADisplay;
