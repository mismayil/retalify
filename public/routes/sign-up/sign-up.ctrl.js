angular
    .module('app.core')
    .controller('signUpController', signUpController);

function signUpController($scope) {
    $sope.user = {
    	firstName: 'Lorem Ipsum',
    	lastName: 'Memesh',
    	email: 'example@example.com',
    }

}
