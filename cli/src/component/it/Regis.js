import {React,useState} from "react";
import 'antd/dist/antd.css';
import { Form, Input, Button ,Col,Row} from 'antd';
import Axios from "axios";
function Regis()
{
    const [form] = Form.useForm();
    const[username,setusername]=useState("");
    const[password,setpassword]=useState(0);
    const[position,setposition]=useState("");
    const[user,setuser]=useState([]);
    const regis=()=>{
        Axios.post('http://localhost:3001/add',{
        username:username,
        password:password,
        position:position
        }).then(()=>{
            setuser([
                ...user,{
                    username:username,
                    password:password,
                    position:position
                }
            ])
        })
        form.resetFields();
        /*
        document.getElementById("bz").value=" ";
        document.getElementById("u").value=" ";
        document.getElementById("po").value="";
        document.getElementById("pa").value=" ";*/
    }
    return(
    <div>
        <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 10,
      }}
      autoComplete="off"
      type="success"
      form={form}
    >
      <Row >
      <Col span={24} align={"middle"}><h2>Register</h2></Col>
     </Row>
     {/* <input type="text" id="bz"></input> */}
      <Form.Item
        label="Username"  
        name="username"
        onChange={(e)=>{setusername(e.target.value)}}
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input id="u"/>
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
        <Input.Password id="pa" />
      </Form.Item>
      <Form.Item
        label="Position"  
        name="position"
        onChange={(e)=>{setposition(e.target.value)}}
        rules={[
          {
            required: true,
            message: 'Please input your position!',
          },
        ]}
      >
        <Input  id="po"/>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 12,
          span: 10,
        }}
      >
      <Button type="primary" htmlType="submit" onClick={regis}>
          Submit  
        </Button>
      </Form.Item>
    </Form>
        </div>
    );
}
export default Regis;
/*<Button type="primary" htmlType="submit" onClick={() => { regis(); onReset();}}>*/