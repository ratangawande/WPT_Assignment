const mysql = require('mysql2')

const dbparams = {

    host: 'localhost',
    user: 'root',
    password: 'new_password',
    database: 'kanpur',
    port: 3306

}

const conn = mysql.createConnection(dbparams)

let category = 'stationary'

conn.query('select * from item where category = ?;', [category], (err, rows)=>{

    if(err)
    {

        console.log('Let see error')

    }else{

        if(rows.length > 0)
        {
            
            for(let i = 0; i < rows.length; i++)
            {

            console.log(rows[i].itemno+" "+rows[i].itemname+" "+rows[i].price+" "+rows[i].category)             //rows is an array which contains one object per row

            }
            
        }else{

            console.log("No items with this"+" "+category)

        }   

    }


    })

console.log('db with npm is working')