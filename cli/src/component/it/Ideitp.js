import { React, useState } from "react";
import 'antd/dist/antd.css';
import { Form, Col, Row } from 'antd';
import Axios from "axios";
function Ideitp() {
    const [page, setpage] = useState();
    const [nnum,setnumber]=useState();
    const [nuser,setuser]=useState();
    const [npass,setpass]=useState();
    const [npo,setpo]=useState();
    const [data,setdata]=useState();
    const sp = () => {
        var nummem=0;
        var numd=0
        nummem=document.getElementById("number").value
        setpage(
            <Row >
            <Col span={24} align={"middle"}> <input type="text" id="user" onChange={sp} required></input></Col>
            <Col span={24} align={"middle"}> <input type="text" id="pass" onChange={sp} required></input></Col>
            <Col span={24} align={"middle"}> <input type="text" id="posi" onChange={sp} required></input></Col>
        </Row>
        )
        Axios.get('http://localhost:3001/employeedetail').then((response)=>{
            numd=response.data.length;
            console.log(response.data);
            setdata(response.data);
            console.log(data);
            for(let i=0;i<numd;i++)
            {
                if(nummem==response.data[i].number)
                {
                    console.log("found");
                    document.getElementById("user").placeholder=response.data[i].username;
                    document.getElementById("pass").placeholder=response.data[i].password;
                    document.getElementById("posi").placeholder=response.data[i].position;
                    setnumber(document.getElementById("number").value);
                    setuser(document.getElementById("user").value);
                    setpass(document.getElementById("pass").value);
                    setpo(document.getElementById("posi").value);
                    break;
                }
            }
        })
        console.log( nummem);
    };
     const conficmem=()=>{
         console.log(nnum+" "+npass);
       Axios.put('http://localhost:3001/update',{username:nuser,password:npass,position:npo,number:nnum}).then((response=>{
            setdata(
                data.map((val)=>{
                    return val.number ==nnum ?{
                        number:nnum,
                        username:nuser,
                        password:npass,
                        position:npo
                    } :val;
                })
            )
        }))
    }
    return (
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
            >
                <Row >
                    <Col span={24} align={"middle"}> <h2>Confic member</h2></Col>
                    <Col span={24} align={"middle"}> <input type="text" id="number" onChange={sp} required placeholder="insert number"></input></Col>
                    <Col span={24} align={"middle"}>{page}</Col>
            
                <Col span={24} align={"middle"}><button onClick={conficmem}>click_me</button></Col>
                </Row>
            </Form>    
        </div>
    )
};
export default Ideitp;