import logo from "./logo.svg";
import "./App.css";
import { Layout } from "antd";
import React from "react";
import "antd/dist/antd.min.css";
import Sidebar from "./components/Sidebar";
import Headbar from "./components/Headbar";
import Property from "./components/Property";
const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <Layout className="main-cont" style={{ overflow: "hidden" }}>
      <Sider
        theme="light"
        trigger={null}
        style={{ borderRight: "0px solid aliceblue" }}
        collapsible
      >
        <Sidebar />
      </Sider>
      <Layout>
        <Header style={{ background: "white" }}>
          <Headbar />
        </Header>
        <Content>
          <Property />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
