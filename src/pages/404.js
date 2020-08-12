import React from "react";

import SEO from "../components/seo";

export default class NotFoundPage extends React.Component {

  render() {
    return (
      <>
        <SEO title="Page Not found" />
        <h1>404</h1>
        <p>This is the 404 error page. :^(</p>
      </>
    );
  }

}
