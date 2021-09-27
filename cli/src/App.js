import {React,useState} from "react";
import 'antd/dist/antd.css';
import Login from "./Login.js";
import Imain from'./component/it/Imain.js';
import Umain from './component/user/Umain.js';
function App() {
var [page,setpage]=useState();
const login=()=>
{
  console.log("Wello come to login");
  setpage(<Login/>)
}
const admin=()=>
{
  console.log("Wello come to admin");
  setpage(<Imain/>)
}
const em=()=>
{
  console.log("Wello come to em");
  setpage(<Umain/>)
}
  return (
    <div >
      <Login/>
      {/* {page}
      <button onClick={login}>click_me_to_login </button>
      <button onClick={admin}>click_me_to_admin </button>
      <button onClick={em}>click me to_Em </button> */}
    </div>
  );
}



export default App;
/*<Button type="primary" htmlType="submit" onClick={getEmpoyee}>*/
/*     <Button type="primary" htmlType="submit" onClick={() => { getEmpoyee(); ll();}}>*/