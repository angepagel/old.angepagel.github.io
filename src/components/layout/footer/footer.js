import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import SocialAccounts from "../../social/socialAccounts/socialAccounts";

import "./footer.scss";

export default class Footer extends React.Component {
    
  render() {
    return (
      <footer className="bg-dark text-secondary p-3">
        <Container>
          <Row>
            <Col>
              © 2020 Ange Pagel. Tous droits réservés
            </Col>
            <Col>
              <SocialAccounts className="float-right" />
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }

}
