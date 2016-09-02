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
            templateUrl:'sections/home/home.htm', controller: 'homeController'
        });
}