import React from 'react';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <div className='ipa header container'>
      <h1 className='ipa header title'>Open IPA</h1>
      <h3 className='ipa header subtitle'>
        Free, informative IPA transcription for Lyric Diction
      </h3>
    </div>
  );
};

export default Header;
