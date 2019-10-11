var Card = require('./model/card');

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
        attribute: req.body.attribute,
        image: req.body.image,
        type: req.body.type,
        ATK: req.body.ATK,
        DEF: req.body.DEF,
        description: req.body.description
    }
    console.log("createCard - card: %0", card);
    Card.create(card, function (err, data) {
        if (err) {
            console.log("err: %0", err);
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
        nombre: req.body.nombre,
        name: req.body.name,
        level: req.body.level,
        attribute: req.body.attribute,
        image: req.body.image,
        type: req.body.type,
        ATK: req.body.ATK,
        DEF: req.body.DEF,
        description: req.body.description
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