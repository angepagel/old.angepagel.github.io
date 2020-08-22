import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import SEO from "../components/seo";
import DottedBackground from "../components/miscellaneous/dottedbackground/dottedbackground";

export default class BlogPostTemplate extends React.Component {

  render() {
    return (
      <div id="blog-post">
        <SEO title={this.props.title} />

        <Container>
          <Row className="my-6">
            <Col>
              <article className="post position-relative">
                <DottedBackground top left />
                <DottedBackground bottom right />

                <div
                  className="post-cover-img"
                  style={{ backgroundImage: `url(${this.props.pageContext.featuredImageUrl})` }}
                />

                <div className="bg-light py-5 px-6">
                  <Row>
                    <Col lg="10" className="mx-auto">

                      <div className="text-consolas text-secondary">
                        {this.props.pageContext.date}
                      </div>

                      <h1 className="display-4 font-weight-bold">
                        {this.props.pageContext.title}
                      </h1>

                      <hr/>

                      <div dangerouslySetInnerHTML={{ __html: this.props.pageContext.html }} />

                    </Col>
                  </Row>
                </div>
              </article>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

}
