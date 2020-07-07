const fs = require('fs') //requiero fylesistem
const dbMarcas = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

const marcas = {
    index:function(req, res) {
        res.set({'content.type':'text/plain;charset=utf-8'});
        
        let marcas = []
        dbMarcas.forEach(function(sucursal){
            sucursal.autos.forEach(function(auto){
            if(!marcas.includes(auto.marca)){
                marcas.push(auto.marca)
            }
        })
   })
    
         res.write("Estas son las marcas con las que contamos: ")
         res.write("\n")
         marcas.forEach(function(marca){
         res.write("*marca:" + marca.toUpperCase() + "\n")
    })
    res.end();
    },

    id:function(req, res){
        res.set({'content.type':'text/plain;charset=utf-8'});
        let idMarcas = req.params.marcas
        dbMarcas.forEach(function(sucursal){
            sucursal.autos.forEach(function(auto){
                if(auto.marca == idMarcas){
            //})
            //if(auto.marca == idMarcas){
                res.write('Estos son los vehiculos de la marca: ' + auto.marca + '\n'+ auto.modelo + '\n' + auto.anio + '\n')
                //res.write('Cantidad' + sucursal.marca.lenght)
            }
        }) 
        })
        res.end('Lo siento, no contamos con esa marca');


    }
 
}



module.exports = marcas;