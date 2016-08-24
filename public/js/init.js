/**
 * Created by mismayil on 23/08/16.
 */

var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

// Initialize Firebase
var config = {
        apiKey: "AIzaSyCvQKdKUYoSHC2M5Gnznj9vIfjVPUwR1ZA",
        authDomain: "retalify-b39aa.firebaseapp.com",
        databaseURL: "https://retalify-b39aa.firebaseio.com",
        storageBucket: "retalify-b39aa.appspot.com",
    };
firebase.initializeApp(config);