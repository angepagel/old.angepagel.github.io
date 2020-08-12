import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";

export default class BlogPage extends React.Component {

  render() {
    return (
      <Layout>
        <SEO title="Blog" />
        <h1>Blog</h1>
        <p>What happened to the blog?! :^O</p>
      </Layout>
    );
  }

}
