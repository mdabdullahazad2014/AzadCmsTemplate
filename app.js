var app = angular.module('scotchApp', ['ui.bootstrap', 'ngRoute', 'ngCookies', 'ngAnimate']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/main', {
        templateUrl : 'view/main.html'
    })
    .when("/pagination", {
        templateUrl : "view/pagination.html",
        controller : "paginationCtrl"
    })
    .when("/progressBar", {
        templateUrl : "view/progressBar.html",
        controller : "progressBarCtrl"
    })
    .when("/tabs", {
        templateUrl : "view/tabs.html",
        controller : "tabsCtrl"
    })
    .when("/buttons", {
        templateUrl : "view/buttons.html",
        controller : "buttonsCtrl"
    });
});

app.run(function($rootScope) {
	$rootScope.authenticated = false;
});