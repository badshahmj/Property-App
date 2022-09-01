import React, { useState } from "react";
import { Button, Col, Input, Row, Steps } from "antd";
import "./Property.css";
import residential from "../assets/residential.svg";
import commercial from "../assets/commercial.svg";
import home from "../assets/home.svg";
const { Step } = Steps;

const Property = () => {
  const [current, setCurrent] = useState(1);
  const [propertyType, setPropertyType] = useState("residential");
  return (
    <div className="content-cont">
      <Steps
        current={current}
        className="steps-cont"
        labelPlacement="vertical"
      >
        <Step title="Property Type" />
        <Step title="Property Details" onClick={() => setCurrent(2)} />
        <Step title="Property Location" />
      </Steps>

      {current == 1 && (
        <Col className="property-card-col">
          <p className="property-font">SELECT PROPERTY TYPE</p>
          <div className="property-cards-cont">
            <Col
              onClick={() => setPropertyType("residential")}
              className="property-card"
              style={
                propertyType === "residential"
                  ? { background: "#75013d", border: "1px solid #75013d" }
                  : {}
              }
            >
              <div className="home-img-cont">
                <img src={residential} className="home-img" />
              </div>
              <p
                className="resd-font"
                style={propertyType != "residential" ? { color: "black" } : {}}
              >
                Residential
              </p>
            </Col>
            <Col
              className="property-card"
              onClick={() => setPropertyType("commercial")}
              style={
                propertyType === "commercial"
                  ? {
                      background: "#75013d",
                      border: "1px solid #75013d",
                      marginLeft: "30px",
                    }
                  : { marginLeft: "30px" }
              }
            >
              <div className="home-img-cont">
                <img
                  src={commercial}
                  className="home-img"
                  style={{
                    background:
                      "linear-gradient(180deg, #E9F4FF 0%, #FFFFFF 100%)",
                  }}
                />
              </div>
              <p
                className="resd-font"
                style={
                  propertyType === "residential" ? { color: "black" } : {}
                }
              >
                Commercial
              </p>
            </Col>
          </div>
        </Col>
      )}
      {current == 2 && (
        <Col className="details-cont">
          <Row className="details-title-row">
            <p className="prop-font">Property Details</p>{" "}
            <p className="resd-font-1" style={{ color: "black" }}>
              — Residential{" "}
            </p>
          </Row>
          <Row className="content-row">
            <Col className="content-col-1">
              <p className="prop-cat-font">Property Category</p>
              <div className="property-cards-cont-1">
                <Col
                  onClick={() => setPropertyType("residential")}
                  className="property-card"
                  style={
                    propertyType === "residential"
                      ? {
                          background: "#75013d",
                          border: "1px solid #75013d",
                          padding: "10px 20px",
                        }
                      : { padding: "10px 20px" }
                  }
                >
                  <div className="home-img-cont">
                    <img src={residential} className="home-img" />
                  </div>
                  <p
                    className="resd-font"
                    style={
                      propertyType != "residential" ? { color: "black" } : {}
                    }
                  >
                    Residential
                  </p>
                </Col>
                <Col
                  className="property-card"
                  onClick={() => setPropertyType("commercial")}
                  style={
                    propertyType === "commercial"
                      ? {
                          background: "#75013d",
                          border: "1px solid #75013d",
                          padding: "10px 20px",
                        }
                      : { padding: "10px 20px" }
                  }
                >
                  <div className="home-img-cont">
                    <img
                      src={commercial}
                      className="home-img"
                      style={{
                        background:
                          "linear-gradient(180deg, #E9F4FF 0%, #FFFFFF 100%)",
                      }}
                    />
                  </div>
                  <p
                    className="resd-font"
                    style={
                      propertyType === "residential" ? { color: "black" } : {}
                    }
                  >
                    Commercial
                  </p>
                </Col>
              </div>
            </Col>
            <Col className="content-col-2">
              <p className="content-col-2-title">Independent House/Villa</p>
              <div className="inputs-cont-1">
                <Col className="input-col-1">
                  <div className="input-div">
                    <p className="input-label">Property Name</p>
                    <Input className="input" />
                  </div>
                  <div className="input-div">
                    <p className="input-label">Property Name</p>
                    <Input className="input" />
                  </div>
                  <div className="input-div">
                    <p className="input-label">Property Name</p>
                    <Input className="input" />
                  </div>
                  <div className="input-div">
                    <p className="input-label">Property Name</p>
                    <Input className="input" />
                  </div>
                </Col>
                <Col className="input-col-1">
                  <div className="input-div">
                    <p className="input-label">Property Name</p>
                    <Input className="input" />
                  </div>
                  <div className="input-div">
                    <p className="input-label">Property Name</p>
                    <Input className="input" />
                  </div>
                  <div className="input-div">
                    <p className="input-label">Property Name</p>
                    <Input className="input" />
                  </div>
                  <div className="input-div">
                    <p className="input-label">Property Name</p>
                    <Input className="input" />
                  </div>
                </Col>
              </div>
              <Row className="btns-row">
                <Button className="bck-btn" onClick={() => setCurrent(1)}>
                  Back
                </Button>
                <Button className="nxt-btn">Next</Button>
              </Row>
            </Col>
          </Row>
        </Col>
      )}
    </div>
  );
};

export default Property;
