import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql,  } from "gatsby";

class SEO extends React.Component {

  render() {
    const title = this.props.title
      ? this.props.data.site.siteMetadata.title + " - " + this.props.title
      : this.props.data.site.siteMetadata.title;
    const metaDescription = this.props.description || this.props.data.site.siteMetadata.description;

    return (
      <Helmet>
        {/* HTML Attributes */}
        <html lang="fr" />
        {/* Title */}
        <title>{title}</title>
        {/* Meta */}
        <meta charSet="utf-8" />
        <meta name="description" content={metaDescription} />
        <meta name="author" content={this.props.data.site.siteMetadata.author} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={metaDescription} />
      </Helmet>
    );
  }

}

SEO.defaultProps = {
  lang: `fr`,
  title: ``,
  description: ``,
}

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `}
    render={data => <SEO data={data} {...props} />}
  />
);
