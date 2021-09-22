import { React, useState } from "react";
import 'antd/dist/antd.css';
import Axios from "axios";
import { Table } from 'antd';
function Prec()
{
    
    const [data,setdata]=useState();
    const getEmpoyee=()=>{
        Axios.get('http://localhost:3001/employeedetail').then((response)=>{
        setdata(response.data);
        console.log(data);
        }
        )
      }
    const colum =[
        {
            title:'Username',
            dataIndex:'username',
            key:'username',
        },
        {
            title:'Password',
            dataIndex:'password',
            key:'password',
        },
        {
            title:'Position',
            dataIndex:'position',
            key:'position',
        }
    ]
    
    return(
        <div>
            <button onClick={getEmpoyee}>click_me</button>
            <Table columns={colum} dataSource={data} />
        </div>
    )
}
export default Prec;