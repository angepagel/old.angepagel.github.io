import React from "react";

import SEO from "../components/seo";

export default class HomePage extends React.Component {

  render() {
    return (
      <>
        <SEO title="Home" />
        <h1>Home</h1>
        <p>This is the homepage. :^)</p>
      </>
    );
  }

}
