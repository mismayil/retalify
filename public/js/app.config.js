/**
 * Created by mismayil on 01/09/16.
 */

'use strict';

angular
    .module('app.config', ['firebase'])
    .config(config);

function config($mdThemingProvider) {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCvQKdKUYoSHC2M5Gnznj9vIfjVPUwR1ZA",
        authDomain: "retalify-b39aa.firebaseapp.com",
        databaseURL: "https://retalify-b39aa.firebaseio.com",
        storageBucket: "retalify-b39aa.appspot.com"
    };

    firebase.initializeApp(config);

    // Configure a theme
    $mdThemingProvider.theme('retalify-theme', 'default')
        .backgroundPalette('grey', {'default': '300'})
        .primaryPalette('orange', {'default':'800'})
        .accentPalette('green', {'default': '700'});
}