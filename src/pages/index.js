import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Jumbotron, Form } from "react-bootstrap";
import axios from "axios";
import "../App.css";
import Header from "../component/header";
import Chart from "../component/chart";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null,
      confirmed: null,
      countryDefault: null
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

  getConfirmed = () => {
    axios({
      method: "get",
      url: "https://covid19.mathdro.id/api/confirmed",
      responseType: "json"
    }).then(response => {
      this.setState({ confirmed: response.data });
    });
  };

  setDefaultCountry = async key => {
    const { confirmed } = this.state;
    const data = await this.searchDataObject(confirmed, key);
    this.setState({ countryDefault: data });
  };

  searchDataObject = (object, key) => {
    return object.filter(x => x.iso3 === key)[0];
  };

  componentDidMount = async () => {
    this.getCountries();
    this.getConfirmed();
  };

  render() {
    const { country, confirmed } = this.state;
    let databycountry;
    confirmed != null
      ? (databycountry = this.searchDataObject(confirmed, "AFG"))
      : (databycountry = "Loading");
    console.log(databycountry);
    return (
      <>
        <Container>
          <Header />
          <br />
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
                        {country != null ? (
                          country.map((item, index) => (
                            <option key={index}>{item.name}</option>
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
                  <h5>{databycountry.confirmed}</h5>
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
                  <h5>{databycountry.recovered}</h5>
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
                  <h5>{databycountry.deaths}</h5>
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
                  <h5>{databycountry.lastUpdate}</h5>
                </Container>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="col-style" xs={12} md={12}>
              <Card className="card-style1">
                <Container>
                  <Chart legendPosition="bottom" />
                </Container>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
