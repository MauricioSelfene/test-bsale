const mysql = require('mysql');

const conecction = mysql.createConnection({
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user: 'bsale_test',
    password: 'bsale_test',
    database: 'bsale_test',
})

conecction.connect( (err)=> {
    if(err) throw err
    console.log('Coneccion lista');
})

module.exports = conecction;
/*
conecction.query('select * from bsale_test.product', (err, rows) => {
    if(err) throw err
    console.log('Datos de bsale')
    console.log(rows)
})

conecction.end();
*/