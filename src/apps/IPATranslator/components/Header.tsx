import React from 'react';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <div className='ipa header container'>
      <h1 className='ipa header title'>IPA Translator</h1>
    </div>
  );
};

export default Header;
