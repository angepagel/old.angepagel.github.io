import React from "react";
import PropTypes from "prop-types";

import Header from "./header/header";
import Footer from "./footer/footer";

import "../../scss/global.scss";

export default class Layout extends React.Component {

  render() {
    return (
      <div className="root">
        <Header/>
        <main>{this.props.children}</main>
        <Footer/>
      </div>
    );
  }

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
  