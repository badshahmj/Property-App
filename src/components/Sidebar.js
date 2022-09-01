import { Col, Menu, Row } from "antd";
import React from "react";
import logo from "../assets/logo.svg";
import keyHand from "../assets/keyHand.svg";
import requests from "../assets/requests.svg";
import setting from "../assets/setting.svg";
import calender from "../assets/calender.svg";
import help from "../assets/help.svg";
import signOut from "../assets/signOut.svg";
import "./Sidebar.css";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
const Sidebar = () => {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem(
      "Dashboard",
      "1",
      <AppstoreOutlined style={{ fontSize: "20px" }} />
    ),
    getItem("Properties", "2", <img src={keyHand} />),
    getItem("Requests", "3", <img src={requests} />),
    getItem("Calendar", "4", <img src={calender} />),
    getItem("Settings", "5", <img src={setting} />),
    getItem("Help", "6", <img src={help} />),
  ];
  return (
    <Col className="sidebar-container">
      <img src={logo} alt="Logo" className="logo" />
      <Menu items={items} defaultSelectedKeys={"1"} />
      <Row className="sign-out-row">
        <img src={signOut} /> <p className="sign-out">Sign out</p>
      </Row>
    </Col>
  );
};

export default Sidebar;
