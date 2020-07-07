const fs = require('fs') //requiero fylesistem
const dbHome = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

const home = {
    index:(req, res) => {
        res.write('Bienvenidos! Estas son nuestras sucursales: \n')
        dbHome.forEach(function(sucursales){
            res.write('\n')
            res.write(sucursales.sucursal)
            res.write('\n')
           
        })
        res.end();
    },

}



module.exports = home;