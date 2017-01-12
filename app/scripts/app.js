'use strict';
angular.module('confusionApp', ['ngRoute'])
.config(function($routeProvider) {
        $routeProvider
            // route for the contactus page
            .when('/contactus', {
                templateUrl : 'contactus_template.html',
                controller  : 'ContactController'
            })
            // route for the menu page
            .when('/menu', {
                templateUrl : 'menu_template.html',
                controller  : 'MenuController'
            })
            // route for the dish details page
            .when('/menu/:id', {
                templateUrl : 'dishdetail_template.html',
                controller  : 'DishDetailController'
            })
            .otherwise('/contactus');
    })
