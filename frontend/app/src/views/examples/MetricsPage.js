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
  Progress,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

class MetricsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      grocery: 0,
      clothing: 0,
      selfcare: 0,
      home: 0,
      other: 0,
    };

    this.updateGrocery = this.updateGrocery.bind(this);
    this.updateClothing = this.updateClothing.bind(this);
    this.updateSelfcare = this.updateSelfcare.bind(this);
    this.updateHome = this.updateHome.bind(this);
    this.updateOther = this.updateOther.bind(this);
  }

  updateGrocery() {
    const oldGrocery = this.state.grocery;
    const oldTotal = this.state.total;
    this.setState({
      grocery: oldGrocery + 1,
      total: oldTotal + 1,
    });
  }

  updateClothing() {
    const oldClothing = this.state.grocery;
    const oldTotal = this.state.total;
    this.setState({
      clothing: oldClothing + 1,
      total: oldTotal + 1,
    });
  }

  updateSelfcare() {
    const oldSelfcare = this.state.selfcare;
    const oldTotal = this.state.total;
    this.setState({
      selfcare: oldSelfcare + 1,
      total: oldTotal + 1,
    });
  }

  updateHome() {
    const oldHome = this.state.home;
    const oldTotal = this.state.total;
    this.setState({
      updateHome: oldHome + 1,
      total: oldTotal + 1,
    });
  }

  updateOther() {
    const oldOther = this.state.other;
    const oldTotal = this.state.total;
    this.setState({
      other: oldOther + 1,
      total: oldTotal + 1,
    });
  }

  render() {
    return (
      <>
        <ExamplesNavbar />
        <ProfilePageHeader />
        <div className="section profile-content">
          <Container>
            <div className="owner">
              <div className="name">
                <h2 className="title">
                  Your Metrics <br />
                </h2>
              </div>
            </div>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <p>
                  Use this section to log your purchases, and see how Conscious
                  Consumer helps you to make sustainable decisions. Thank you
                  for doing your part.
                </p>
                <br />
              </Col>
            </Row>
            <br />
          </Container>
          <Container>
            <div className="progress-container progress-primary">
              <span className="progress-badge">
                TOTAL SUSTAINABLE PURCHASES
              </span>
              <Progress
                max="100"
                value={this.state.total}
                barClassName="progress-bar-success"
             />
            </div>
            <div className="progress-container progress-primary">
              <span className="progress-badge">
                Sustainable Grocery Purchases
              </span>
              <Progress
                max="100"
                value={this.state.grocery}
                barClassName="progress-bar-primary"
             />
            </div>
            <div className="progress-container progress-primary">
              <span className="progress-badge">
                Sustainable Clothing Purchases
              </span>
              <Progress
                max="100"
                value={this.state.clothing}
                barClassName="progress-bar-primary"
             />
            </div>
            <div className="progress-container progress-primary">
              <span className="progress-badge">
                Sustainable Self-Care Purchases
              </span>
              <Progress
                max="100"
                value={this.state.selfcare}
                barClassName="progress-bar-primary"
             />
            </div>
            <div className="progress-container progress-primary">
              <span className="progress-badge">Sustainable Home Purchases</span>
              <Progress
                max="100"
                value={this.state.home}
                barClassName="progress-bar-primary"
             />
            </div>
            <div className="progress-container progress-primary">
              <span className="progress-badge">Other</span>
              <Progress
                max="100"
                value={this.state.other}
                barClassName="progress-bar-primary"
             />
            </div>
          </Container>
          <br />
          <Container>
            <div style={{float:"left", width:"20%", margin:"auto", textAlign:"center"}}>
              <Button
                className="btn-round"
                color="info"
                onClick={this.updateGrocery}
                style={{
                  marginBottom: "35px",
                  marginTop: "0px",
                  backgroundColor: "navajowhite",
                  borderColor: "darkslategray",
                  color: "darkslategray",
                }}
              >
               Grocery
              </Button>
            </div>
            <div style={{float:"left", width:"20%", margin:"auto", textAlign:"center"}}>
              <Button
                className="btn-round"
                color="info"
                onClick={this.updateClothing}
                style={{
                  marginBottom: "35px",
                  marginTop: "0px",
                  backgroundColor: "navajowhite",
                  borderColor: "darkslategray",
                  color: "darkslategray",
                }}
              >
                Clothing
              </Button>
            </div>
            <div style={{float:"left", width:"20%", margin:"auto", textAlign:"center"}}>
              <Button
                className="btn-round"
                color="info"
                onClick={this.updateSelfcare}
                style={{
                  marginBottom: "35px",
                  marginTop: "0px",
                  backgroundColor: "navajowhite",
                  borderColor: "darkslategray",
                  color: "darkslategray",
                }}
              >
                Self-Care
              </Button>
            </div>
            <div style={{float:"left", width:"20%", margin:"auto", textAlign:"center"}}>
              <Button
                className="btn-round"
                color="info"
                onClick={this.updateHome}
                style={{
                  marginBottom: "35px",
                  marginTop: "0px",
                  backgroundColor: "navajowhite",
                  borderColor: "darkslategray",
                  color: "darkslategray",
                }}
              >
                Home
              </Button>
            </div>
            <div style={{float:"left", width:"20%", margin:"auto", textAlign:"center"}}>
              <Button
                className="btn-round"
                color="info"
                onClick={this.updateOther}
                style={{
                  marginBottom: "35px",
                  marginTop: "0px",
                  backgroundColor: "navajowhite",
                  borderColor: "darkslategray",
                  color: "darkslategray",
                }}
              >
                Other
              </Button>
            </div>
          </Container>
        </div>
        <DemoFooter />
      </>
    );
  }
}

export default MetricsPage;
