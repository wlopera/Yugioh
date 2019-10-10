var Service = require('./services');

module.exports = function (app) {

  /**
   * CRUD - Atributos de BD
   * @autor: wlopera
   */

  //Consultar atributos
  app.get('/api/attribute', Service.getAttribute);

  //Crear atributo
  app.post('/api/attribute', Service.createAttribute);

  //Actualizar atributo
  app.put('/api/attribute/:attribute_id', Service.updateAttribute);

  //Borrar Atributo
  app.delete('/api/attribute/:attribute_id', Service.removeAttribute);

  /**
   * CRUD - Cartas de BD
   * @autor: wlopera
   */
  
  //Consultar carta
  app.get('/api/card', Service.getCard);

  //Crear carta
  app.post('/api/card', Service.createCard);

  //Actualizar carta
  app.put('/api/card/:card_id', Service.updateCard);

  //Borrar carta
  app.delete('/api/card/:card_id', Service.removeCard);


  // Carga unica de la vista - Aplicacion -
  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/angular/index.html');
  });

}