//Create a module
var app = angular.module("myMenuApp", ['ngSanitize', 'ctrlModule', 'ngRoute'])

//Module Loading phase
app.config(function($routeProvider) {
    console.log("App Configuration")
    
    $routeProvider.when("/", {
        template: "<h3>Welcome to the Restaurant</h3>" 
    })
    $routeProvider.when("/MenuCard", {
        templateUrl: "partials/menucard.html"
    });
    $routeProvider.when("/Manage", {
        templateUrl: "partials/manage.html",
        controller: "menuController"
    });
//    $routeProvider.otherwise({template: "<h1>No such element.</h1>"});
    $routeProvider.otherwise({redirectTo:'/'});
})

app.run(function() {
    console.log("App Run")
})

//app.value("vOrders", []);