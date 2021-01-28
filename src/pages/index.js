import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

import SEO from "../components/seo";
import SocialAccounts from "../components/social/socialAccounts/socialAccounts";
import DottedBackground from "../components/miscellaneous/dottedbackground/dottedbackground";

export default class HomePage extends React.Component {

  render() {
    return (
      <div id="home">
        <SEO title="Home" />
        
        <section id="about">
          <Container>
            <Row>
              <Col>
                <div className="bg-light my-6 py-5 px-6">
                  <h1 className="display-3 font-weight-bold">Bonjour</h1>
                  <p className="my-4">
                    Je suis un apprenti ingénieur en informatique et en mathématiques appliquées.
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
              <Alert variant="warning">
                Mon site internet personnel est encore en construction, revenez plus tard ! :^)
              </Alert>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

}
