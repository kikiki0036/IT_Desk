import { React, useState } from "react";
import 'antd/dist/antd.css';
import { Form, Input, Button, Col, Row } from 'antd';
import Axios from "axios";
import { Link ,Route} from "react-router-dom";
import Imain from "./component/it/Imain.js";
import Umain from "./component/user/Umain.js";
function Login() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState(0);
  var [data,setdata]=useState("");
  var [ss,setss]=useState(0);
  var [page, setpage] = useState('');
  var n;
  const getEmpoyee = () => {
    Axios.get('http://localhost:3001/employeedetail').then((response) => {
      n = response.data.length;
      console.log(document.getElementById("user").value);
      console.log(document.getElementById("passw").value);
      setname(document.getElementById("user").value);
      setpassword(document.getElementById("passw").value)
      for (var i = 0; i < n; i++) {
        if (document.getElementById("user").value == response.data[i].username && document.getElementById("passw").value == response.data[i].password) {
          console.log("loged in");
          if (response.data[i].position == "It") {
          //  setstat(1);
            saz(1);
      //d      setpage(<Imain/>);
            console.log("It");
            break;
          }
          else {
            console.log("EM");
            saz(2);
            break;
          }
        }
      }
    }
    )
  }
  const rsaz=()=>{
    if(data==0)
    {
      saz(0)
    }
  }
  const saz = (stagtg) => {
    console.log(stagtg);
    if (stagtg === 0) {
      setpage(
        <Row >
          <Col span={24} align={"middle"}><h2>Login</h2></Col>
          <Col span={24} align={"middle"}> <input type="text" id="user" onChange={(e) => { setname(e.target.value) }} required placeholder="insert username"></input></Col>
          <Col span={24} align={"middle"}> <input type="text" id="passw" onChange={(e) => { setpassword(e.target.value) }} required placeholder="insert password"></input></Col>
          <Col span={24} align={"middle"}><button onClick={getEmpoyee}>click_me to the moon</button></Col>
        </Row> 
      )
      setdata(11);
    }
    else if(stagtg===1)
    {
      setpage(<Imain/>);
    }
    else
    {
      setpage(<Umain/>);
    }
  }
  return (
    <div >
        {rsaz()}
        {page}
    
    </div>
  );
}
export default Login;

/*<Button type="primary" htmlType="submit" onClick={getEmpoyee}>*/