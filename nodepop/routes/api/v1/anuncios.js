"use strict";
let express = require('express');
let router = express.Router();

let mongoose = require('mongoose')
let AnuncioModel = mongoose.model('Advertisement');


router.get('/',function (req, res){
    /*Lista de anuncios paginada.
    Con filtros por tag,
    tipo de anuncio (venta o búsqueda),
     rango de precio (precio min. y precio max.) y
      nombre de artículo (que empiece por el dato buscado)
*/
    let criteria ={};
    if (typeof req.query.nombre !== 'undefined'){
        criteria.nombre =  { $regex: /^req.query.nombre/i } ;
    }
    if (typeof req.query.tags !== 'undefined'){
        criteria.tags = {$in: req.query.tags.split(',') } ;
    }
    if (typeof req.query.venta !== 'undefined'){
        criteria.venta =  req.query.venta;
    }
    let precioMin = parseFloat(req.query.preciomin) || 0;
    let precioMax = parseFloat(req.query.preciomax) || null;
    if (precioMax){
        criteria.precio =  { $gte:precioMin, $lte:precioMax };
    }else {
        criteria.precio = { $gte:precioMin } ;
    }

    let start = parseInt(req.query.start) || 0;
    let limit = parseInt(req.query.limit) || null;
    let sort = req.query.sort || null;

    AnuncioModel.list(criteria,start,limit, sort, function (err, rows) {
        if (err){
            //Para devolver un status code distinto de 200, proque hay un error:
            return res.status(401).json({
                success:false,
                error: err
            });
        }
        res.json({success:true, rows:rows});
    });
});

router.get('/tags',function (req, res){
    AnuncioModel.listTags(function(err,rows){
        if (err){
            return res.status(401).json({
                success:false,
                error:err
            });
        }
        res.json({success:true, rows:rows});

    });
});

module.exports = router;