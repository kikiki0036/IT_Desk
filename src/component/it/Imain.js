import React, { useState } from "react";
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import Regis from'./Regis.js';
import Ideitp from './Ideitp.js';
import Prec from './Prec.js';
const { Header } = Layout;
function Imain() {
  const [page,setpage]=useState();
  const regisP=()=>{
    setpage(<Regis/>)
  }
  const Editp=()=>{
    setpage(<Ideitp/>)
  }
  const prec=()=>{
    setpage(<Prec/>)
  }
  return (
    <div>
      <h2>this is it </h2>
      <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" >
        <Menu.Item key="1" onClick={regisP}>Register</Menu.Item> 
        <Menu.Item key="2" onClick={Editp}>Edit member</Menu.Item>
        <Menu.Item key="3" onClick={prec}>cumrong</Menu.Item>
      </Menu>
    </Header>
    {page}
    </Layout>
    </div>
  );
}

export default Imain;
