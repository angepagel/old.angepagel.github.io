import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SocialAccounts from '../../social/SocialAccounts';

import './Footer.scss';

export default function Footer() {

  return (
    <footer className="bg-dark text-secondary py-3">
      <Container>
        <Row>
          <Col>
            © 2021 Ange Pagel. Tous droits réservés.
          </Col>
          <Col>
            <div className="d-flex justify-content-end">
              <SocialAccounts className="float-end" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );

}