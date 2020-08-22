import React from "react";
import { StaticQuery, graphql, navigate } from "gatsby";
import { Container, Row, Col, Button } from "react-bootstrap";

import SEO from "../components/seo";

import DottedBackground from "../components/miscellaneous/dottedbackground/dottedbackground";

class BlogPage extends React.Component {

  render() {
    return (
      <div id="blog">
        <SEO title="Blog" />

        <Container>
          
          <header className="page-title bg-light py-4 px-6 my-6 mx-auto mx-lg-0 position-relative" style={{width: "fit-content"}}>
            <DottedBackground top left width={150} height={100} />
            <DottedBackground bottom right width={150} height={100} />
            <h1 className="display-3 font-weight-bold">Blog</h1>
          </header>

          <Row className="blog-posts">
            {
              this.props.data.allMarkdownRemark.edges.map(({node}) => {
                const title = node.frontmatter.title || 'Unknown';
                const date = node.frontmatter.date || 'Unknown';
                const slug = node.frontmatter.slug || '';
                const featuredImageUrl = node.frontmatter.featuredImage ? node.frontmatter.featuredImage.childImageSharp.original.src : '';
                const excerpt = node.excerpt || 'Empty?!';

                return (
                  <Col lg="6" key={node.id}>
                    <article className="mb-5">

                      <div
                        className="post-cover-img"
                        style={{ backgroundImage: `url(${featuredImageUrl})` }}
                      />

                      <div className="bg-light py-5 px-6">

                        <div className="text-consolas text-secondary">
                          {date}
                        </div>

                        <h2>
                          {title}
                        </h2>

                        <p className="py-2">
                          {excerpt}
                        </p>

                        <Button className="w-50" variant="outline-primary" onClick={() => {navigate(slug)}}>
                          Lire
                        </Button>

                      </div>
                    </article>
                  </Col>
                );
              })
            }
          </Row>
        </Container>
      </div>
    );
  }

}

export default props => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        allMarkdownRemark (
            sort: { fields: frontmatter___date, order: DESC }  
        ) {
          edges {
            node {
              id
              excerpt
              frontmatter {
                title
                slug
                date(formatString: "DD MMMM YYYY", locale: "fr")
                featuredImage {
                  childImageSharp {
                    original {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <BlogPage data={data} {...props}/>}
  />
);
