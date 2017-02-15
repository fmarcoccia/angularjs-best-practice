/**
 * Created by fabio on 13/02/17.
 */
angular.module('app').
    config(configurations);

configurations.$inject = ['$routeProvider'];

function configurations($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl : "partials/home.html",
            controller: "HomeController as homeCtrl"
        })
        .when("/about", {
            templateUrl : "partials/about.html",
            controller: "AboutController as aboutController"
        })
        .otherwise({ redirectTo: '/home' });

}

