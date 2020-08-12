import React from "react";
import PropTypes from "prop-types";
import { GitHub, Twitter, Linkedin, Mail } from "react-feather";

import "./socialAccounts.scss";

export default class SocialAccounts extends React.Component {

  render() {
    return (
      <div className={"social-accounts " + this.props.className}>
        <a className="social-account" rel="noopener noreferrer" href="https://github.com/angepagel" target="_blank" aria-label="Github">
          <GitHub />
        </a>
        <a className="social-account" rel="noopener noreferrer" href="https://twitter.com/angepagel" target="_blank" aria-label="Twitter">
          <Twitter />
        </a>
        <a className="social-account" rel="noopener noreferrer" href="https://www.linkedin.com/in/angepagel/" target="_blank" aria-label="Linkedin">
          <Linkedin />
        </a>
        <a className="social-account" rel="noopener noreferrer" href="mailto:hello@angepagel.fr" target="_blank" aria-label="Email">
          <Mail />
        </a>
      </div>
    );
  }

}

SocialAccounts.propTypes = {
  className: PropTypes.string,
};

SocialAccounts.defaultProps = {
  className: '',
};

