/**
 * Servidor JS
 * 
 * Servicios:
 *  - CRUD de informacion de atributos - mongo
 *
 * @autor: william Lopera
 * @date:  Octubre 2019
 */

// Inicializaciones
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const port = 4200;

const app = express();

// Configuracion

// Conexion base de datos -MongoDB- 
mongoose.connect('mongodb://localhost:27017/Yugioh', { useNewUrlParser: true, useUnifiedTopology: true });     // Conexion a la base de datos Mongo -> "yugioh"

app.use(express.static(__dirname + '/angular'));
app.use(logger('dev'));            // activamos el log en modo 'dev'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Cargamos Endpoints
require('./node/routes.js')(app);

// Ambiente
if ('development' == app.get('env')) {
    console.log("Enpoints DEV")
}

// Levantamos el servidor
app.listen(port, () => {
    console.log("Servidor levantado en el puerto: " + port);
});
