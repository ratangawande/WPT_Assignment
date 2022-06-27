const mysql = require('mysql2')

const dbparams = {

    host: 'localhost',
    user: 'root',
    password: 'new_password',
    database: 'kanpur',
    port: 3306

}

const conn = mysql.createConnection(dbparams)

let itemno = 5
let itemname = 'maggi'
let price = 35
let category = 'cooking'

conn.query('insert into item (itemno, itemname, price, category) values (?,?,?,?);', [itemno, itemname, price, category], 
(err, resl)=>{

    if(err)
    {

        console.log("Let see error")

    }else{

        console.log("inserted successful"+" "+resl.affectedRows)
    
    }
    

})

console.log('db working with npm')