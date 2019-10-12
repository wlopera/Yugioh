angular.module('MainApp', [])
    .controller("MainController", MainController);

MainController.$inject = ['$scope', '$http'];

function MainController($scope, $http) {
    $scope.newCard = {};
    $scope.isCopy = true;

    $scope.currentCard = {
        name: 'Yugioh',
        image: 'yugioh.jpg'
    };

    $scope.cards = [];
    $scope.show = false;
    $scope.showData = false;
    $scope.filtro = '';
    $scope.filter = '';

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
        console.log("Actualizando carta...: %0", $scope.newCard);
        $http.put('/api/card/' + $scope.newCard._id, $scope.newCard)
            .then(function (data) {
                angular.copy($scope.newCard, $scope.currentCard);
                $scope.newCard = {}; // Borrar data creada
                $scope.cards = data.data;
                console.log("Data actualizada...: %0", $scope.cards);
            }, function (err) {
                console.log('Error actualizando carta: ' + err);
            });
    }

    // Eliminar carta
    $scope.deleteCard = function (card) {
        $http.delete('/api/card/' + card._id)
            .then(function (data) {
                $scope.newCard = {}; // Borrar data creada
                $scope.cards = data;
            }, function (err) {
                console.log('Error borrando carta: ' + err);
            });
    }

    $scope.showCard = function (card) {
        $scope.currentCard = card;
        $scope.show = true;

        if (null == card.level) {
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

    // Retorna el nombre dle archivo a agregar
    $scope.setFile = function (element) {
        $scope.$apply(function ($scope) {
            console.log(element.files[0]);
            $scope.newCard.image = element.files[0].name;
            console.log("Archivo: " + $scope.newCard.image);
        });
    };

    $scope.copy = function () {
        $scope.isCopy = true;
    }

    $scope.modify = function () {
        $scope.isCopy = false;
        angular.copy($scope.currentCard, $scope.newCard);
    }

    $scope.processCard = function () {
        if ($scope.isCopy) {
            $scope.createCard();
        } else {
            $scope.updateCard();
        }
        $('#exampleModal').modal('hide');
    }

}