angular.module('MainApp', [])
    .controller("MainController", MainController);

MainController.$inject = ['$scope', '$http'];

function MainController($scope, $http) {
    $scope.newAttibute = {};
    $scope.attributes = {};

    $scope.newCard = {};
    $scope.cards = {};

    /**
     * Servicio - Atributos
     * @autor: wlopera
     */

    // Crear atributos
    $scope.createAttribute = function () {
        $http.post('/api/attribute', $scope.newAttibute)
            .then(function (data) {
                $scope.newAttibute = {}; // Borrar data creada
                $scope.attributes = data;
            }, function (err) {
                console.log('Error creando atributos: ' + err);
            });
    }

    // Modificar atributos
    $scope.updateAttribute = function () {
        $http.put('/api/attribute/' + $scope.newAttibute._id, $scope.newAttibute)
            .success(function (data) {
                $scope.newAttibute = {}; // Borrar data creada
                $scope.attributes = data;
            }).error(function (err) {
                console.log('Error actualizando atributos: ' + err);
            });
    }

    // Eliminar atributos
    $scope.deleteAttribute = function (attribute) {
        $http.delete('/api/attribute/' + attribute._id)
            .success(function (data) {
                $scope.newAttibute = {}; // Borrar data creada
                $scope.attributes = data;
            }).error(function (err) {
                console.log('Error borrando atributos: ' + err);
            });
    }

    // Consultar atributos
    $http.get('/api/attribute')
        .then(function (attibutes) {
            $scope.attributes = attibutes.data;
        }, function (err) {
            console.log('Error consulta atributos BD: ' + err);
        });

    /**
     * Servicio - Card
     * @autor: wlopera
     */

    // Crear carta
    $scope.createCard = function () {
        console.log("Creando carta...: %0", $scope.newCard);
        $http.post('/api/card', $scope.newCard)
            .then(function (data) {
                $scope.newCard = {}; // Borrar data creada
                $scope.cards = data;
            }, function (err) {
                console.log('Error creando carta: ' + err);
            });
    }

    // Modificar carta
    $scope.updateCard = function () {
        $http.put('/api/card/' + $scope.newCard._id, $scope.newCard)
            .success(function (data) {
                $scope.newCard = {}; // Borrar data creada
                $scope.cards = data;
            }).error(function (err) {
                console.log('Error actualizando carta: ' + err);
            });
    }

    // Eliminar carta
    $scope.deleteCard = function (card) {
        $http.delete('/api/card/' + card._id)
            .success(function (data) {
                $scope.newCard = {}; // Borrar data creada
                $scope.cards = data;
            }).error(function (err) {
                console.log('Error borrando carta: ' + err);
            });
    }


    $scope.newCard = {
        nombre: 'Dragón Blanco de Ojos Azules',
        name: 'Blue-Eyes White Dragon',
        level: '8',
        attribute: {
            name: 'Luz',
            icon: null
        },
        icon: null,
        type: 'Dradón',
        ATK: '3000',
        DEF: '2500',
        description: 'Este legendario dragón es una poderosa máquina de destrucción. Virtualmente invencible, muy pocos se han enfrentado a esta impresionante criatura y han vivido para contarlo.'
    }
    $scope.createCard();

    // Consultar carta
    $http.get('/api/card')
        .then(function (cards) {
            $scope.cards = cards.data;
        }, function (err) {
            console.log('Error consulta carta: ' + err);
        });


}