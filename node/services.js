var Attribute = require('./model/attribute');

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

    Attribute.create(atribute, function (err, data) {
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
        { $set: attibute },
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