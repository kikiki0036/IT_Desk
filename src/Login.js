import {React,useState} from "react";
import 'antd/dist/antd.css';
import { Form, Input, Button ,Col,Row} from 'antd';
import Axios from "axios";
import {Link } from"react-router-dom";
function Login(props) {
var [name,setname]=useState("");
var [password,setpassword]=useState(0);
var n;
const getEmpoyee=()=>{
  Axios.get('http://localhost:3001/employeedetail').then((response)=>{
    n=response.data.length;
    console.log(response.data);
    console.log(n);
    console.log(name);
    console.log(password);
    for(var i=0;i<n;i++){
    if(name==response.data[i].username&&password==response.data[i].password)
    {
      console.log(response.data[i].position);
      console.log("loged in");
      if(response.data[i].position=="It")
      {
        <Link to="/It">adada</Link>
      }
      else
      {
        <Link to="/Emp"></Link>
      }
      break;
    } 
  }
  
  }
  )
}
  return (
    <div >
      
       <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 10,
      }}
    
      autoComplete="off"

    >
      <Row >
      <Col span={24} align={"middle"}><h2>Login</h2></Col>
     </Row>
      <Form.Item
        label="Username"  
        name="username"
        onChange={(e)=>{setname(e.target.value)}}
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        onChange={(e)=>{setpassword(e.target.value)}}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 12,
          span: 10,
        }}
      >
       <Link to="/"> <Button type="primary" htmlType="submit" onClick={getEmpoyee}>
          Submit  
        </Button></Link>
      </Form.Item>
    </Form>
    </div>
  );
}
export default Login;

/*<Button type="primary" htmlType="submit" onClick={getEmpoyee}>*/