import React from 'react';
import CoffeeButton from './CoffeeButton';
import { Link } from 'react-router-dom';

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <div className='ipa__landing-page__footer'>
      <Link to='/' className='ipa__landing-page__footer-logo-container'>
        <img
          alt='Logo'
          src={require('../../../images/websitelogo.png')}
          className='ipa__landing-page__footer-logo'
        />
        <h3 className='ipa__landing-page__footer-name'>
          Built by Henry Fellerhoff
        </h3>
      </Link>
      <div className='ipa__landing-page__footer-coffee-container'>
        <CoffeeButton />
      </div>
    </div>
  );
};

export default Footer;
