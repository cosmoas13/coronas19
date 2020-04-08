import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import axios from "axios";
import moment from "moment";
import "../App.css";
import Header from "../component/header";
import Chart from "../component/chart";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iso3: null,
      country: null,
      data: null
    };
  }

  getCountries = () => {
    axios({
      method: "get",
      url: "https://covid19.mathdro.id/api/countries",
      responseType: "json"
    }).then(response => {
      this.setState({ country: response.data.countries });
    });
  };

  getConfirmed = value => {
    axios({
      method: "get",
      url: "https://covid19.mathdro.id/api/countries/" + value,
      responseType: "json"
    }).then(response => {
      this.setState({ data: response.data });
    });
  };

  componentDidMount = async () => {
    this.getCountries();
    this.getConfirmed("AFG");
  };

  render() {
    const { data, country } = this.state;
    console.log(data);
    return (
      <>
        <Container>
          <Header />
          <br />
          <div>
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
                          value={this.state.iso3}
                          onChange={e => {
                            console.log(e.target.value);
                            this.getConfirmed(e.target.value);
                          }}
                        >
                          {country != null ? (
                            country.map((item, index) => (
                              <option key={index} value={item.iso3}>
                                {item.name}
                              </option>
                            ))
                          ) : (
                            <option>Loading</option>
                          )}
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
                    <h5>{data?.confirmed?.value}</h5>
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
                    <h5>{data?.recovered?.value}</h5>
                  </Container>
                </Card>
              </Col>
            </Row>
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
                    <h5>{data?.deaths?.value}</h5>
                  </Container>
                </Card>
              </Col>
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
                    <h5>
                      {moment(data?.lastUpdate)
                        .subtract(3, "days")
                        .calendar()}
                    </h5>
                  </Container>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col className="col-style" xs={12} md={12}>
                <Card>
                  <Container
                    style={{
                      backgroundColor: "#3a2d38",
                      borderRadius: "15px",
                      borderColor: "#3a2d38",
                      color: "#3a2d38"
                    }}
                  >
                    <Chart legendPosition="bottom" />
                  </Container>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <Container className="parentFoot">
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <div className="footer">
                      <a href="https://github.com/cosmoas13">
                        <img
                          alt=""
                          src="/images/github.svg"
                          width="25"
                          height="25"
                          className="d-inline-block align-top"
                        />
                      </a>
                    </div>
                    <div className="footer">
                      <a href="https://www.facebook.com/cosmo.as">
                        <img
                          alt=""
                          src="/images/facebook.svg"
                          width="25"
                          height="25"
                          className="d-inline-block align-top"
                        />
                      </a>
                    </div>

                    <div className="footer">
                      <a href="https://www.instagram.com/cosmo.as/">
                        <img
                          alt=""
                          src="/images/instagram.svg"
                          width="25"
                          height="25"
                          className="d-inline-block align-top"
                        />
                      </a>
                    </div>
                  </div>
                </Container>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12} md={12}>
                <p style={{ color: "gray" }}>
                  created by &copy;cosmoas13 - API from{" "}
                  <a href="https://covid19.mathdro.id/api/">@mathdro.id</a>
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </>
    );
  }
}

export default Home;
