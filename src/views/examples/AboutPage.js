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
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function ProfilePage() {
  return (
    <>
      <ExamplesNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="name">
              <h2 className="title">
                About Conscious Consumer <br />
              </h2>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                Here is our expanded mission statement. We will write an amazing
                background and mission statement that has been extensively
                researched and include it here.
              </p>
              <br />
              <p>Here is a little bit about us. We're pretty cool.</p>
              <br />
              <Button
                className="btn-round"
                color="default"
                href="https://github.ibm.com/Gabrielle-Klein/Conscious-Consumer"
                outline
              >
                GitHub Repo
              </Button>
            </Col>
          </Row>
          <br />
          <Row>
            <h2 className="title" style={{color:"darkslategray", textAlign:"center", margin:"auto"}}>
              The Problem We Address
            </h2>
          </Row>
          <br />
          <Row>
            <h4 style={{color:"dimgray", textAlign:"center", margin:"auto"}}>How do we provide a simplistic, easy, and convenient way to provide information regarding sustainability products?</h4>
          </Row>
          <br />
          <Row>
            <Col md="4">
              <h5 style={{textAlign:"center", margin:"auto", color:"white", height:"350px", fontWeight:"600", backgroundImage:
            "url(" + require("assets/img/foodWaste.png") + ")"}}><br/><br/><br/><br/><br/>1.3 billion tons of food is wasted every year. By 2050, food waste will amount to about 2 gigatons of CO2 per year</h5>
            </Col>
            <Col md="4">
              <h5 style={{textAlign:"center", margin:"auto", color:"white", height:"350px", fontWeight:"600", backgroundImage:
            "url(" + require("assets/img/climateChange.png") + ")"}}><br/><br/><br/><br/><br/>The Earth's surface temperature was around 0.95 degrees Celsius warmer than the 20th century average</h5>
            </Col>
            <Col md="4">
              <h5 style={{textAlign:"center", margin:"auto", color:"white", height:"350px", fontWeight:"600", backgroundImage:
            "url(" + require("assets/img/toothBrush.png") + ")"}}><br/><br/><br/><br/><br/>1 billion toothbrushes will be thrown away  this year, most of them are plastic</h5>
            </Col>
          </Row>
          <br />
          <div className="section section-dark text-center" style={{backgroundColor: "darkslategray"}}>
            <Container>
              <h2 style={{color:"navajowhite"}}>Meet Our Team</h2>
              <Row>
                <Col md="4">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <img src={require("assets/img/Apoorva.png")} />
                    </div>
                    <CardBody>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <div className="author">
                          <h4 style={{color:"navajowhite", marginTop:"5px"}}>Apoorva Josyula</h4>
                          <h6 className="card-category">IBM Cloud Intern</h6>
                        </div>
                      </a>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <img
                        src={require("assets/img/Audrey.JPG")}
                      />
                    </div>
                    <CardBody>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <div className="author">
                          <h4 style={{color:"navajowhite", marginTop:"5px"}}>Audrey Moore</h4>
                          <h6 className="card-category">OM FlashSystems Intern</h6>
                        </div>
                      </a>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <img
                        src={require("assets/img/Charles.png")}
                      />
                    </div>
                    <CardBody>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <div className="author">
                          <h4 style={{color:"navajowhite", marginTop:"5px"}}>Charles Johnson</h4>
                          <h6 className="card-category">CIO Finance Business/Data Analyst Intern</h6>
                        </div>
                      </a>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <img src={require("assets/img/Gabrielle.png")} />
                    </div>
                    <CardBody>
                      <div className="author">
                        <h4 style={{color:"navajowhite", marginTop:"5px"}}>Gabrielle Klein</h4>
                        <h6 className="card-category">Software Developer Intern</h6>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <img src={require("assets/img/Michaela.jpg")} />
                    </div>
                    <CardBody>
                      <div className="author">
                        <h4 style={{color:"navajowhite", marginTop:"5px"}}>Michaela Hennebury</h4>
                        <h6 className="card-category">Software Developer Intern</h6>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
