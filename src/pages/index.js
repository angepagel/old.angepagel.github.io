import React from "react";
import { Container, Row, Col } from "react-bootstrap";

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
            <Col lg="6" className="mb-3 mb-lg-0">
              <section className="bg-light py-5 px-6 h-100 position-relative">
                <DottedBackground top left />
                <h1>Heading 1</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus velit sed orci porttitor consectetur. Duis at risus ultrices, tristique mi in, vulputate arcu.
                </p>
                <h2>Heading 2</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus velit sed orci porttitor consectetur. Duis at risus ultrices, tristique mi in, vulputate arcu.
                </p>
                <h3>Heading 3</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus velit sed orci porttitor consectetur. Duis at risus ultrices, tristique mi in, vulputate arcu.
                </p>
                <h4>Heading 4</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus velit sed orci porttitor consectetur. Duis at risus ultrices, tristique mi in, vulputate arcu.
                </p>
              </section>
            </Col>
            <Col lg="6" className="mt-3 mt-lg-0">
              <section className="bg-light py-5 px-6 h-100 position-relative">
                <DottedBackground bottom right />

                <h1>Heading 1</h1>
                <span className="text-consolas text-secondary">information 2020/01/01</span><br/>
                Ceci est un <a href="#">lien</a>.
                
              </section>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

}
