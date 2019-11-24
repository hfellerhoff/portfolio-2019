import React from 'react';
import { Link } from '@reach/router';

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <div className='ipa footer container'>
      <div className='ipa footer content-container'>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            alt='Logo'
            src={require('../../../images/websitelogo.png')}
            className='ipa logo'
          />

          <h3 className='ipa footer text'>Built by</h3>
          <Link className='ipa footer link' to='/'>
            Henry Fellerhoff
          </Link>
        </div>
        <div>
          <a
            className='bmc-button'
            target='_blank noopener noreferrer'
            href='https://www.buymeacoffee.com/henryfellerhoff'
          >
            <img
              src='https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg'
              alt='Buy me a coffee'
            />
            <span style={{ marginLeft: 15, fontSize: 19 }}>
              Buy me a coffee
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
