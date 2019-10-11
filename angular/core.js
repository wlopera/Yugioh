angular.module('MainApp', [])
    .controller("MainController", MainController);

MainController.$inject = ['$scope', '$http'];

function MainController($scope, $http) {
    $scope.newCard = {
        image: 'yugioh.jpg'
    };
    $scope.cards = {};
    $scope.show = false;
    $scope.showData = false;

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
    
    $scope.showCard = function(card){
        $scope.newCard = card;
        $scope.show = true;

        if (null == card.level){
            $scope.showData = false;
        } else {
            $scope.showData = true;
        }
    }

    // Consultar carta
    $http.get('/api/card')
        .then(function (cards) {
            $scope.cards = cards.data;
        }, function (err) {
            console.log('Error consulta carta: ' + err);
        });


}