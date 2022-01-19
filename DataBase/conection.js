const mysql = require('mysql2');

const con = mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'',
    database:'leads',

});

con.connect((err)=>{

    if(!err){

        console.log('Conectado!')

    }

});

module.exports = con;