import React, { useState } from "react";
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import Tablet from "./Tablet.js";
const { Header } = Layout;
function Umain() {
  const [page,setpage]=useState();

  const table=()=>{
    // setpage(<Tablet/>)
  }
  return (
    <div>
      <h2>this is user </h2>
      <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" >
        <Menu.Item key="1" onClick={table}>go to edit table test</Menu.Item> 
        <Menu.Item key="2"></Menu.Item>
        <Menu.Item key="3" ></Menu.Item>
      </Menu>
    </Header>
    {page}
    </Layout>
    </div>
  );
}

export default Umain;
