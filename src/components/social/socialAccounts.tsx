import React from 'react';
import PropTypes from 'prop-types';
// import { GitHub, Twitter, Linkedin, Mail, MessageCircle } from 'react-feather';
import { GitHub, Twitter, Linkedin, Mail, MessageCircle } from 'react-feather';

import './SocialAccounts.scss';

export default function SocialAccounts() {

  return (
    // <div className={'social-accounts ' + this.props.className}>
    <div className='social-accounts'>
      <a className="social-account" rel="noopener noreferrer" href="https://github.com/angepagel" target="_blank" aria-label="GitHub" title="GitHub">
        <GitHub />
      </a>
      <a className="social-account" rel="noopener noreferrer" href="https://twitter.com/angepagel" target="_blank" aria-label="Twitter" title="Twitter">
        <Twitter />
      </a>
      <a className="social-account" rel="noopener noreferrer" href="https://www.linkedin.com/in/angepagel/" target="_blank" aria-label="Linkedin" title="LinkedIn">
        <Linkedin />
      </a>
      <a className="social-account" rel="noopener noreferrer" href="https://t.me/angepagel" target="_blank" aria-label="Telegram" title="Telegram">
        <MessageCircle />
      </a>
      <a className="social-account" rel="noopener noreferrer" href="mailto:hello@angepagel.fr" target="_blank" aria-label="Email" title="Email">
        <Mail />
      </a>
    </div>
  );

}

SocialAccounts.propTypes = {
  className: PropTypes.string,
};

SocialAccounts.defaultProps = {
  className: '',
};
