angular.module('MainApp')
    .directive('mainDirective', mainDirective);

function mainDirective() {

    return {
        restrict: 'E',
        templateUrl: '/app/views/mainView.html',

        link: function ($scope, element, attrs) {

            $scope.isCopy = true;
            $scope.show = false;
            $scope.showData = false;
            $scope.filtro = '';
            $scope.filter = '';

            // Procesar opcion copiar carta
            $scope.copy = function () {
                $scope.isCopy = true;
                $scope.newCard = { character: "Seleccione", attribute: "Seleccione" };
                $('#exampleModal').modal('show');
            }

            // Procesar opcion modificar carta
            $scope.modify = function () {
                if (null != $scope.currentCard.nombre) {
                    $scope.isCopy = false;
                    angular.copy($scope.currentCard, $scope.newCard);
                    $('#exampleModal').modal('show');
                }
            }

            // Procesar carta
            $scope.processCard = function () {
                if ($scope.isCopy) {
                    $scope.createCard();
                } else {
                    $scope.updateCard();
                }
                $('#exampleModal').modal('hide');
            }

            // Mostrar carta
            $scope.showCard = function (card) {
                $scope.currentCard = card;
                $scope.show = true;

                if (null == card.level) {
                    $scope.showData = false;
                } else {
                    $scope.showData = true;
                }
            }
        }
    }

}