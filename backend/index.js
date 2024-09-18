import express from "express";
import mysql from "mysql";
const app=express()

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"test",
})
app.get("/",(req,res)=>{
    res.json("hello  this is ths backend")
})

app.get("/create",(req,res)=>{
    const q="SELECT * FROM books"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
            return res.json(data)
        })
})
app.post("/books",(req,res)=>{
    const q="Insert into books(`title`,`desc`,`cover`) values(?)"
    const values=["title from backend","desc from backend","cover from backend"]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
            return res.json("book has been creadted successfully");
        })
})

app.listen(3001,()=>{
    console.log("Connected to backend!")
})
//if there is an authentication problem use this code
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
