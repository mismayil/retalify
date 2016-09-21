/**
 * Created by mismayil on 2016-09-12.
 */

angular
    .module('app.core')
    .controller('footerController', footerController)
    .config(config);

function footerController($scope) {
}

function config($mdThemingProvider) {
    // $mdThemingProvider.theme('footer-theme', 'retalify-theme').dark();
}