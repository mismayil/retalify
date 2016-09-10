/**
 * Created by mismayil on 01/09/16.
 */

'use strict';

angular
    .module('app.routes', ['ngRoute'])
    .config(config);

function config($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl:'routes/home/home.html',
            controller: 'homeController as home'
        })
        .when('/raise-capital', {
            templateUrl: 'routes/raise-capital/raise-capital.html',
            controller: 'raiseCapitalController as rc'
        })
        .when('/demo', {
            templateUrl: 'routes/demo/demo.html',
            controller: 'demoController as demo'
        })
        .otherwise({
            redirectTo: '/'
        });
}