//Create a module
var app = angular.module("myMenuApp", ['ngSanitize', 'ctrlModule'])

//Module Loading phase
app.config(function() {
    console.log("App Configuration")
})

app.run(function() {
    console.log("App Run")
})

app.value("vOrders", []);