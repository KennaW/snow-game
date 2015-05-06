var snowGame = angular.module('snowGame', ['ui.router', 'ngAnimate']);

    snowGame.config(function($stateProvider) {
        $stateProvider.state('snow', {
        url: "",
        templateUrl: "partials/snow.html",
        controller: "startCtrl"
        });

        $stateProvider.state('house', {
        url: "",
        templateUrl: "partials/house.html"
        });

    });
