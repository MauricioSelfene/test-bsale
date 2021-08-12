var express = require('express');
var router = express.Router();
var bd = require('../conexion/conexion');

/* GET home page productos.ejs. */
router.get('/', function(req, res, next) {

    bd.query(`
    
        SELECT *, format(price,0)precio  FROM bsale_test.product
    
    `, function(err, resultado){
        console.log(resultado)
        res.render('productos', { title: 'Nuestros productos', Product:resultado });

    });

});
  

module.exports = router;

