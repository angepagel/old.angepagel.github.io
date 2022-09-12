import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SocialAccounts from '../social/socialAccounts';


// import './footer.scss';

export default function Footer() {
    
  return (
    <footer className="bg-dark text-secondary py-3">
      <Container>
        <Row>
          <Col>
            © 2021 Ange Pagel. Tous droits réservés.
          </Col>
          <Col>
            <SocialAccounts className="float-right" />
          </Col>
        </Row>
      </Container>
    </footer>
  );

}