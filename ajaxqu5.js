const express = require('express')
const app = express()

const mysql = require('mysql2')

let dbparams = {

    host: 'localhost',
    user: 'root',
    password: 'new_password',
    database: 'kanpur',
	port:3306

}


app.use(express.static('npm')) 

const con=mysql.createConnection(dbparams)

app.get('/account', (req,resp)=>{           //event handler       


    let accountno = req.query.accountno        //this input is coming from ajaxqu5.html

    let output = {status : false, accountdetails : {accountno : "", balance : 0}}

    con.query('select balance from account where accountno = ?',[accountno],(error,rows)=>{

        if(rows.length > 0)
        {
            output.status = true
            output.accountdetails = rows[0]
    
        }

    
    console.log(output)
    resp.send(output)      //this output is going to ajaxqu5.html
        
    
})




})


app.get('/empprocess', (x,y)=>{

    y.send("The employee no is"+" "+x.query.empno)                   //response is output in browser
    
    console.log("empprocess is working"+" "+x.query.empno)

})


//setup the server
app.listen(2000, ()=>{

    console.log("server listening on port 2000.....")

    
})