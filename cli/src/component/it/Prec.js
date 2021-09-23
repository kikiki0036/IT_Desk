import { React, useState } from "react";
import 'antd/dist/antd.css';
import Axios from "axios";
import { Table ,Space} from 'antd';
function Prec()
{
    const [page,setpage]=useState();
    const [data,setdata]=useState();
    const [dd,setdd]=useState();
    const [nnum,setnum]=useState();
    var arr=[{
    }]
    const getEmpoyee=()=>{
        arr.length=0;
        Axios.get('http://localhost:3001/employeedetail').then((response)=>{
      //  setdata(response.data);
        setdd(response.data);
        for(var i=0;i<response.data.length;i++)
        {
            
            arr.push({
                key:response.data[i].number,
                username:response.data[i].username,
                password:response.data[i].password,
                position:response.data[i].position
            })
            
        }
        console.log(arr);
        console.log(dd);
        setdata(arr)
        setpage(<Table columns={colum} dataSource={data} ></Table>)
        }
        )
      }
    // const del=(nnum)=>{
    //     console.log(nnum);
    //     Axios.delete(`http://localhost:3001/delete/${nnum}`).then((response)=>{
    //          setdd(
    //              dd.filter((val)=>{
    //                  return val.number!=nnum;
    //              })
    //          )
    //     })
    // }
    const az=()=>{
        console.log("test");
     //   console.log(<table);
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
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
            <Space size="middle">
            <a>Confic</a>
            <a  onClick={az}>Delete</a>
            </Space>
    ),
        },
        

    ]
    
    return(
        <div>
            <button onClick={getEmpoyee}>click_me</button>
            <input type="text" id="test" onChange={(e)=>{setnum(e.target.value)}}></input>
            {/* <button  onClick={del({nnum})}>click_me</button> */}
            {page}
        </div>
    )
}
export default Prec;