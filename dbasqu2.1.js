const mysql = require('mysql2')

const dbparams = {

    host: 'localhost',
    user: 'root',
    password: 'new_password',
    database: 'kanpur',
    port: 3306

}

const conn = mysql.createConnection(dbparams)

let price = 25
let category = 'masala noodles'

conn.query('update item set price = ?, category = ? where itemno = 5;', [price, category],
(err, resl)=>{

    if(err)
    {

        console.log('Let see error')


    }else{

        if(resl.affectedRows === 0)
        {
            
            console.log('updated failed')
            
        }else{
            
            console.log('updated successfuly'+' '+resl.affectedRows)

        }

    }



})

console.log('db working with npm')