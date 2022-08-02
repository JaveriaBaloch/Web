const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mysql = require("mysql")
const app = express()
var db = mysql.createConnection({
    host: 'localhost',
    user:'web-admin',
    password:'Potsdam!sGr8',
    database:'JaveriaBaloch',
    port: 3306
})
db.connect((err,result)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("connected")
    }
})
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.get("/",(req,res)=>{
    res.send("hi")
})
app.post ("/Order",(req,res)=>{
  const statemant = `INSERT INTO PROJECT
  (TITLE,TYPE,STARTDATE,BUDGET,CUSTOMERID,Duration,noOFproducts)
   VALUES (?,?,?,?,?,?)`
  db.query(statemant,[req.body.title,req.body.type,req.body.date,req.body.amount,req.body.id,req.body.duration,req.body.project],(err,result)=>{
    if(err){
        console.log(err)
    }else{
        console.log(result)
    }
  })
})
app.post("/AllOrders",(req,res)=>{
    const statemant = `SELECT * From Project where CustomerID =?`
    db.query(statemant,req.body.id,(err,result)=>{
        res.send({orders:result})
    })
})
app.post("/SendMessage",(req,res)=>{
    const statemant = `INSERT INTO Messages (NAME, EMAIL,MESSAGE) VALUES (?,?,?)`
    db.query(statemant,[req.body.name,req.body.email,req.body.msg],(err,result)=>{
        res.send({msg: "success"})
    })
})
app.post("/Users",(req,res)=>{
    const statemant = `SELECT * From customers`
    db.query(statemant,req.body.id,(err,result)=>{
        res.send({users:result})
    })
})
app.post("/SeeOrders",(req,res)=>{
    const statemant = `SELECT * From Project`
    db.query(statemant,req.body.id,(err,result)=>{
        res.send({orders:result})
    })
})
app.post("/SeeMessages",(req,res)=>{
    const statemant = `SELECT * From Messages order by MsgID desc`
    db.query(statemant,req.body.id,(err,result)=>{
        res.send({messages:result})
    })
})
app.post("/Login",(req,res)=>{
    const Check = `SELECT * FROM CUSTOMERS WHERE CONTACT = ? and Password=?`
    db.query(Check,[req.body.email,req.body.password],(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result){
            res.send({user: result})
      }
})

})
app.post("/Signup",(req,res)=>{
    const Check = `SELECT COUNT(Contact) as email FROM CUSTOMERS WHERE Contact = ?`
    db.query(Check,req.body.email,(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result[0].email>0){
            console.log(result[0].email)
            res.send({user:{msg: "Already Taken Exist"}})
        }
        else{
            const Insert = `insert into customers(Name,Contact,Location,Password) value (?,?,?,?)`
            db.query(Insert,[req.body.name,req.body.email,req.body.location,req.body.password],(err,result)=>{
                if(err){
                    console.log(err)
                }
                else{
                    db.query('SELECT * from customers where email=?',req.body.email,(err,results)=>{
                        
                        res.send({user:"Account is create successfully"})
                    })
                    
                }
            })
            console.log(req.body)
        }
    })
    
})
app.post("/Update",(req,res)=>{
    const Check = `UPDATE CUSTOMERS Set Name=?,Contact=?,Location=?,Password=? WHERE CID=?`
    db.query(Check,
        [req.body.name,
            req.body.email,
            req.body.location,
            req.body.password,
            req.body.id
        ],
        (err,result)=>{
        if(err){
            console.log(err)
        }
        res.send({user:[result]})
    })
    
})
app.listen(3001,()=>{
    console.log("running")
})