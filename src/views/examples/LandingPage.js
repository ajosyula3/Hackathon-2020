/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import background from "assets/img/Conscience-Consumer-Header.jpeg";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row
              style={{
                backgroundImage: `url(${background})`,
                marginRight: "-200px",
                marginLeft: "-200px",
              }}
            >
              <Col className="ml-auto mr-auto" md="8">
                <h1
                  className="title"
                  style={{
                    fontWeight: "400",
                    color: "white",
                    marginTop: "60px",
                    marginBottom: "0px",
                  }}
                >
                  Conscious Consumer
                </h1>
                <h5
                  className="description"
                  style={{
                    color: "navajowhite",
                    fontWeight: "400",
                    marginBottom: "0px",
                  }}
                >
                  the one stop search for all your sustainable needs
                </h5>
                <Row>
                  <img
                    style={{ justifyContent: "center", margin: "auto" }}
                    src={require("assets/img/logo2.png")}
                  />
                </Row>
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="6">
                    <br />
                    <></>
                    <br />
                  </Col>
                </Row>
                <Button
                  className="btn-round"
                  color="info"
                  href="/search"
                  style={{
                    marginBottom: "35px",
                    marginTop: "0px",
                    backgroundColor: "navajowhite",
                    borderColor: "darkslategray",
                    color: "darkslategray",
                  }}
                >
                  Search Now
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2
                  className="title"
                  style={{
                    fontWeight: "400",
                    marginTop: "0px",
                    color: "darkslategray",
                  }}
                >
                  Our Mission
                </h2>
                <h5
                  className="description"
                  style={{ fontWeight: "400", color: "dimgray" }}
                >
                  Our goal is to bring awareness to and combat the ongoing
                  battle against climate change. We believe that our site
                  enables everybody to act, live, and shop sustainable. We are
                  always looking to improve and make every consumer a Conscience
                  Consumer!
                </h5>
                <br />
                <br />
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto" md="8"></Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center" style={{ color: "darkslategray" }}>
                  Have Questions about Our Mission?
                </h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Ask us about our mission, our team or sustainability in general..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button
                        className="btn-fill"
                        style={{
                          backgroundColor: "navajowhite",
                          borderColor: "darkslategray",
                          color: "darkslategray",
                        }}
                        size="lg"
                      >
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
