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

app.get('/areainfo', (req,resp)=>{

    let pincode = req.query.pincode        //this input is coming from ajaxqu4.html

    let output = {status : false, areadetails : {pincode : 208023, area : 'vijaynagar'}}

    con.query('select area from areainfo where pincode = ?',[pincode],(error,rows)=>{

        if(rows.length > 0)
        {
            output.status = true
            output.areadetails = rows[0]
    
        }

    /*console.log("pincode as input is"+" "+pincode)

    let area = []

        area.push({nu:208020, ar:'panki'})
        area.push({nu:208009, ar:'awasvikas'})
        area.push({nu:208021, ar:'armapur'})
        area.push({nu:208022, ar:'sastrinagar'})
        area.push({nu:208023, ar:'vijaynagar'})

    
    let output = {status : false, areadetails : {nu : 208023, ar : 'vijaynagar'}}

    
        for(let i = 0; i < area.length; i++)
        {
            if(area[i].nu == pincode)
            {
                output.status = true
                output.areadetails = area[i].ar

                break

            }


        }*/

    console.log(output)
    resp.send(output)      //this output is going to ajaxqu4.html
        
    
})




})


app.get('/empprocess', (x,y)=>{

    y.send("The employee no is"+" "+x.query.empno)                   //response is output in browser
    
    console.log("empprocess is working"+" "+x.query.empno)

})


//setup the server
app.listen(1900, ()=>{

    console.log("server listening on port 1900.....")

    
})