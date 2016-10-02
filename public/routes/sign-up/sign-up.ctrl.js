angular
    .module('app.core')
    .controller('signUpController', signUpController);

function signUpController($scope) {
    $scope.user = {
    	firstName: 'Lorem Ipsum',
    	lastName: 'Memesh',
    	email: 'example@example.com',
      about: 'gotun biri',
      achievements: 'bir pox yemif',
      country: 'USA',
    }

}
