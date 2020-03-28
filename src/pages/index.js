import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Jumbotron, Form } from "react-bootstrap";
import "../App.css";
import Header from "../component/header";
// import Chart from "../component/chart";
class Home extends Component {
  render() {
    return (
      <>
        <Container>
          <Header />
          <Row>
            <Col xs={12} md={4}>
              <Card className="card-style">
                <Container>
                  <Form>
                    <img
                      alt=""
                      src="/images/world.png"
                      width="70"
                      height="70"
                      className="d-inline-block align-top"
                    />
                    <h3>Country</h3>
                    <Form.Group controlId="exampleForm.SelectCustom">
                      <Form.Label style={{ color: "aliceblue" }}>
                        Select Country
                      </Form.Label>
                      <Form.Control
                        style={{ backgroundColor: "transparent" }}
                        as="select"
                        custom
                      >
                        <option>World</option>
                        <option>Uganda</option>
                        <option>Jepang</option>
                        <option>Australia</option>
                        <option>Brazil</option>
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Container>
              </Card>
            </Col>
            <Col className="col-style" xs={12} md={4}>
              <Card className="card-style">
                <Container>
                  <img
                    alt=""
                    src="/images/note.svg"
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                  />
                  <h3>Confirmed</h3>
                  <h5>589.000</h5>
                </Container>
              </Card>
            </Col>
            <Col className="col-style" xs={12} md={4}>
              <Card className="card-style">
                <Container>
                  <img
                    alt=""
                    src="/images/recover.svg"
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                  />
                  <h3>Recovered</h3>
                  <h5>120.000</h5>
                </Container>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="col-style" xs={12} md={8}>
              <Card className="card-style">
                <Container>
                  <img
                    alt=""
                    src="/images/death.svg"
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                  />
                  <h3>Death</h3>
                  <h5>589.000</h5>
                </Container>
              </Card>
            </Col>
            <br />
            <Col className="col-style" xs={12} md={4}>
              <Card className="card-style">
                <Container>
                  <img
                    alt=""
                    src="/images/clock.svg"
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                  />
                  <h3>Last Update</h3>
                  <h5>120.000</h5>
                </Container>
              </Card>
            </Col>
          </Row>
          {/* <Row>
            <Col className="col-style" xs={12} md={12}>
              <Card className="card-style">
                <Container></Container>
              </Card>
            </Col>
          </Row> */}
        </Container>
      </>
    );
  }
}

export default Home;
