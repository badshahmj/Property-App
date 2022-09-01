import { Col, Row } from "antd";
import React from "react";
import "./Headbar.css";
import { RightOutlined } from "@ant-design/icons";
import ProfileAvatar from "../assets/ProfileAvatar.svg";
const Headbar = () => {
  return (
    <Row className="head-cont">
      <p className="title-font">Add Property</p>
      <div className="profile-div">
        <img src={ProfileAvatar} style={{ margin: "0 10px" }} />
        <Col className="profile-col">
          <p className="user-name">Anshuman Tiwari</p>
          <Row className="profile-row">
            <p className="profile-font">Profile</p>
            <RightOutlined style={{ color: "#75013D" }} />
          </Row>
        </Col>
      </div>
    </Row>
  );
};

export default Headbar;
