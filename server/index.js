const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const e = require('express');
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"itsupport"
}
)
app.get('/employeedetail',(req,res )=>{
    db.query("SELECT * FROM employeedetail",(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    });
});
app.post('/employeedetail',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const position=req.body.position;
    db.query("INSERT INTO employeedetail(username,password,position) VALUES(?,?,?)",[username,password,position],
    (err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send("value inserted"); 
        }
    });
})
app.put('/employeedetail',(req,res)=>{
    const number=req.body.number;
    const username=req.body.username;
    const password=req.body.password;
    const position=req.body.position;
    db.query("UPDATE employeedetail SET username = ? ,password = ? ,position = ? WHERE number = ?",[username,password,position,number],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    })
})
app.delete('/delete/:nnumber',(res,req)=>{
    const number=req.body.number;
    db.query("DELETE FROM employeedetail WHERE number = ? ",number,(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    })
})
app.listen('3001',()=>{
    console.log('server is running  on port 3001');
})