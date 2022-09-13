import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import SocialAccounts from '../components/social/SocialAccounts';
import DotGrid from '../components/visual/DotGrid';

export default function Home() {

  return (
    <>
      <div id="home">
        {/* <SEO title="Home" /> */}
        
        <section id="about">
          <Container>
            <Row>
              <Col>
                <div className="bg-light my-6 py-5 px-6">
                  <h1 className="display-3 fw-bold">Bonjour</h1>
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
                <DotGrid top left />
                <h1>Heading 1</h1>
                <hr/>
                <ul>
                  <li>
                    <h3>Diplôme d&apos;Ingénieur en Informatique et en Mathématiques Appliquées</h3>
                    <div className="text-consolas text-secondary">
                      <a href="https://goo.gl/maps/SyBFEGsFhrW4uZM37">Grenoble INP - Ensimag</a><br/>
                      Sept. 2019 - <Badge bg="success">Juin 2022</Badge>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus velit sed orci porttitor consectetur.
                    </p>
                  </li>

                  <li>
                    <h3>Diplôme Universitaire de Technologie en Informatique</h3>
                    <div className="text-consolas text-secondary">
                      <a href="https://goo.gl/maps/SyBFEGsFhrW4uZM37">Université de Bourgogne - IUT de Dijon</a><br/>
                      Sept. 2019 - Juin 2022
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus velit sed orci porttitor consectetur.
                    </p>
                  </li>
                </ul>
              </section>
            </Col>
            <Col lg="6" className="mt-3 mt-lg-0">
              <section className="bg-light py-5 px-6 h-100 position-relative">
                <DotGrid bottom right />

                <h1>Heading 1</h1>
                <hr/>
                <ul>
                  <li>
                    <h3>Apprenti Ingénieur Systèmes d&apos;Information</h3>
                    <div className="text-consolas text-secondary">
                      <a href="https://goo.gl/maps/SyBFEGsFhrW4uZM37">Bertin Technologies Aix-en-Provence</a><br/>
                      Sept. 2019 - <Badge bg="success">Août 2022</Badge>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus velit sed orci porttitor consectetur.
                    </p>
                  </li>

                  <li>
                    <h3>Assistant de recherche</h3>
                    <div className="text-consolas text-secondary">
                      <a href="https://goo.gl/maps/SyBFEGsFhrW4uZM37">Bangkok University - CROCCS</a><br/>
                      Avril 2019 - Juin 2019<br/>
                    </div>
                    <p>
                      Stage de fin d&apos;études articulé autour de la démarche scientifique et de la réalisation du projet « PATCom ».
                    </p>
                  </li>
                </ul>
                
              </section>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );

}
