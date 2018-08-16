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
                <Col className="group" xs={4}>
                    Code
                    <div className="sub-group">We like to code.</div>
                </Col>
                <Col className="group" xs={4}>
                    Eat
                    <div className="sub-group">We like to eat.</div>
                </Col>
                <Col className="group" xs={4}>
                    Learn
                    <div className="sub-group">We like to learn.</div>
                </Col>
              </Row>
            </Grid>
        </div>
    </section>;
