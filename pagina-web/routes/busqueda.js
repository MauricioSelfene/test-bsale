var express = require('express');
var router = express.Router();
var bd = require('../conexion/conexion');

/* GET home page productos.ejs. */
router.get('/', function(req, res, next) {

    let producto = valor;
    bd.query(`
    
        set @producto = '${producto}';
        SELECT *, format(price,0)precio FROM bsale_test.product where name = @producto;
    
    `, function(err, resultado){
        console.log(resultado)
        res.render('productos', { title: 'Nuestros productos', Product:resultado });

    });

});
  

module.exports = router;