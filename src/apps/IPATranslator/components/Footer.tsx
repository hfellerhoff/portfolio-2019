import React from 'react';
import { Link } from '@reach/router';

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <div className='ipa footer'>
      {/* <img
        alt='Logo'
        src={require('../../../')}
        className='logo'
      /> */}
      <h3 className='ipa footer text'>Made by</h3>
      <Link className='ipa footer link' to='/'>
        Henry Fellerhoff
      </Link>
    </div>
  );
};

export default Footer;
