import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import SEO from "../components/seo";
import SocialAccounts from "../components/social/socialAccounts/socialAccounts";

export default class HomePage extends React.Component {

  render() {
    return (
      <>
        <SEO title="Home" />
        
        <section id="about">
          <Container>
            <Row>
              <Col>
                <div className="bg-white my-6 py-5 px-6">
                  <h1>Bonjour</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus velit sed orci porttitor consectetur. Duis at risus ultrices, tristique mi in, vulputate arcu.
                  </p>
                  <SocialAccounts />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        
        <Container>
          <Row className="my-6">
            <Col>
              <section className="bg-light py-5 px-6">
                <h1>Section 1</h1>
              </section>
            </Col>
            <Col>
              <section className="bg-light py-5 px-6">
                <h1>Section 2</h1>
              </section>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="my-6">
            <Col>
              <section className="bg-light py-5 px-6">
                <h1>Section 3</h1>
              </section>
            </Col>
            <Col>
              <section className="bg-light py-5 px-6">
                <h1>Section 4</h1>
              </section>
            </Col>
          </Row>
        </Container>

      </>
    );
  }

}
