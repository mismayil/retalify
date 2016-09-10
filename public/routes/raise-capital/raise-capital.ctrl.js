/**
 * Created by mismayil on 2016-09-10.
 */

angular
    .module('app.core')
    .controller('raiseCapitalController', raiseCapitalController);

function raiseCapitalController($scope) {
    $scope.industry = "";
    $scope.numEmployees = "";
    $scope.raiseTime = "";
}