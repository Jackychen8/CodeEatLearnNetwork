import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export const Home = () =>
    <section>
        <div className="container text-center container-image">
            <Grid>
              <Row>
                <Col className="title" xs={12}>
                    Code, Eat, Learn.
                </Col>
              </Row>
              <Row>
                <Col className="groups" xs={4}>
                    Code
                </Col>
                <Col className="groups" xs={4}>
                    Eat
                </Col>
                <Col className="groups" xs={4}>
                    Learn
                </Col>              </Row>
              <Row className="show-grid">
                <Col className="show-col" xs={6} md={4}>
                    {3}
                </Col>
                <Col className="show-col" xs={6} md={4}>
                    {4}
                </Col>
                <Col className="show-col" xsHidden md={4}>
                    {5}
                </Col>
              </Row>

              <Row className="show-grid">
                <Col className="show-col" xs={6} xsOffset={6}>
                    {6}
                </Col>
              </Row>

              <Row className="show-grid">
                <Col className="show-col" md={6} mdPush={6}>
                    {7}
                </Col>
                <Col className="show-col" md={6} mdPull={6}>
                    {8}
                </Col>
              </Row>
            </Grid>
        </div>
    </section>;
