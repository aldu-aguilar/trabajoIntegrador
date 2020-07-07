const fs = require('fs') //requiero fylesistem
const dbAutos = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

const auto = {
    index:function(req, res) {
        res.set({'content.type':'text/plain;charset=utf-8'});
        dbAutos.forEach(function(elemento){
            elemento.autos.forEach(function(auto){
                res.write('Marca :' + auto.marca + '\n'+ 'Modelo: '+ auto.modelo + '\n')
            })
            

        })
        res.end();
    },
}



module.exports = auto;
