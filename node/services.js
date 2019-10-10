var Attribute = require('./model/attribute');
var Card = require('./model/card');

/**
 * CRUD - Atributos de BD
 * @autor: wlopera
 */

// Consulta atributos de BD
exports.getAttribute = function (req, res) {
    findAtribute(res);
};

// Guardar atributo en BD
exports.createAttribute = function (req, res) {

    var atribute = {
        id: req.body.id,
        name: req.body.name,
        icon: req.body.icon
    }

    Attribute.create(attribute, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            findAtribute(res);
        }
    });
};

// Actualizar atributo en BD
exports.updateAttribute = function (req, res) {

    var atribute = {
        id: req.body.id,
        name: req.body.name,
        icon: req.body.icon
    }

    Attribute.update({ _id: req.params.attribute_id },
        { $set: attribute },
        function (err, data) {
            if (err) {
                res.send(err);
            } else {
                findAtribute(res);
            }
        });
};

// remover atributo en BD
exports.removeAttribute = function (req, res) {
    Attribute.remove({ _id: req.params.attribute_id },
        function (err, data) {
            if (err) {
                res.send(err);
            } else {
                findAtribute(res);
            }
        });
};

// Consultar todos los atributos de BD
function findAtribute(res) {
    Attribute.find(
        function (err, attribute) {
            if (err) {
                res.send(err);
            } else {
                res.json(attribute);
            }
        });
}

 /**
   * CRUD - Cartas de BD
   * @autor: wlopera
   */

   // Consulta carta de BD
exports.getCard = function (req, res) {
    findCard(res);
};

// Guardar carta en BD
exports.createCard = function (req, res) {
    var card = {
        nombre: req.body.nombre,
        name: req.body.name,
        level: req.body.level,
        attribute: {name: req.body.attribute.name, icon: req.body.attribute.icon},
        icon: req.body.icon,
        type: req.body.type,
        ATK: req.body.ATK,
        DEF: req.body.DEF,
        description: req.body.description          
    }

    console.log("createCard - card: %0", card);

    Card.create(card, function (err, data) {
        if (err) {
            console.log("err: %0",  err);
            res.send(err);
        } else {
            console.log("res: %0", res);
            findCard(res);
        }
    });
};

// Actualizar carta en BD
exports.updateCard = function (req, res) {

    var card = {
        id: req.body.id,
        name: req.body.name,
        icon: req.body.icon
    }

    Card.update({ _id: req.params.card_id },
        { $set: card },
        function (err, data) {
            if (err) {
                res.send(err);
            } else {
                findCard(res);
            }
        });
};

// remover carta en BD
exports.removeCard = function (req, res) {
    Card.remove({ _id: req.params.card_id },
        function (err, data) {
            if (err) {
                res.send(err);
            } else {
                findCard(res);
            }
        });
};

// Consultar todas las carta de BD
function findCard(res) {
    Card.find(
        function (err, card) {
            if (err) {
                res.send(err);
            } else {
                res.json(card);
            }
        });
}