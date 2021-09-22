import React, { useState } from "react";
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
const { Header } = Layout;
function Umain() {
  const [page,setpage]=useState();
  return (
    <div>
      <h2>this is user </h2>
      <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" >
        <Menu.Item key="1" >Register</Menu.Item> 
        <Menu.Item key="2">Edit member</Menu.Item>
        <Menu.Item key="3" >cumrong</Menu.Item>
      </Menu>
    </Header>
    {page}
    </Layout>
    </div>
  );
}

export default Umain;
