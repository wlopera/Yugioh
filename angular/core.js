angular.module('MainApp', [])
    .controller("MainController", MainController);

MainController.$inject = ['$scope', '$http'];

function MainController($scope, $http) {
    $scope.newAttibute = {};
    $scope.attributes = {};

    // Crear atributos de BD
    $scope.createAttribute = function () {
        $http.post('/api/attribute', $scope.newAttibute)
            .then(function (data) {
                $scope.newAttibute = {}; // Borrar data creada
                $scope.attributes = data;
            }, function (err) {
                console.log('Error creando atributos BD: ' + err);
            });
    }

    // Modificar atributos de BD
    $scope.updateAttribute = function () {
        $http.put('/api/attribute/' + $scope.newAttibute._id, $scope.newAttibute)
            .success(function (data) {
                $scope.newAttibute = {}; // Borrar data creada
                $scope.attributes = data;
            }).error(function (err) {
                console.log('Error actualizando atributos BD: ' + err);
            });
    }

    // Eliminar atributos de BD
    $scope.deleteAttribute = function (attribute) {
        $http.delete('/api/attribute/' + attribute._id)
            .success(function (data) {
                $scope.newAttibute = {}; // Borrar data creada
                $scope.attributes = data;
            }).error(function (err) {
                console.log('Error borrando atributos BD: ' + err);
            });
    }

    /*
    $scope.newAttibute = {
        id: 7,
        name: 'Magia',
        icon: null
    }
    $scope.createAttribute();

    $scope.newAttibute = {
        id: 8,
        name: 'Trampa',
        icon: null
    }
    $scope.createAttribute();
*/


    // Consultar atributos de BD
    $http.get('/api/attribute')
        .then(function (attibutes) {
            $scope.attributes = attibutes.data;
        }, function (err) {
            console.log('Error consulta atributos BD: ' + err);
        });

}