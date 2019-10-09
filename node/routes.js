var Atributo = require('./model/attribute');
var Service = require('./services');

module.exports = function (app) {

    //Consultar atributos
    app.get('/api/attribute', Service.getAttribute);

    //Crear atributo
    app.post('/api/attribute', Service.createAttribute);

    //Actualizar atributo
    app.put('/api/attribute/:attribute_id', Service.updateAttribute);

    //Borrar Atributo
    app.delete('/api/attribute/:attribute_id', Service.removeAttribute);

    // Carga unica de la vista - Aplicacion -
    app.get('/', function(req, res) {
		res.sendFile(__dirname + '/angular/index.html');
    });
    
}