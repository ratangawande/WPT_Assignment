const mysql = require('mysql2')

const dbparams = {

    host: 'localhost',
    user: 'root',
    password: 'new_password',
    database: 'kanpur',
    port: 3306

}

const conn = mysql.createConnection(dbparams)

let itemno = 1

conn.query('select itemno, itemname, price, category from item where itemno = 1;', [itemno],
(err, rows)=>{

    if(err)
    {

        console.log('Let see error')


    }else{

        console.log('the output is'+' '+rows[0].itemno+' '+rows[0].itemname+' '+rows[0].price+' '+rows[0].category)
    
    }


})

console.log('db with npm is working')