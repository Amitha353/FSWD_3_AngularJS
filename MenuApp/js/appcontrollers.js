var myApp = angular.module("ctrlModule", [])

myApp.config(function() {
    console.log("2_ My App Config")
})

myApp.run(function() {
    console.log("2_ My App Run")
})

//Define a controller
myApp.controller('menuController', function($scope, vOrders) {
    console.log("This is a Menu Controller")
    
//    var msg = "SG, Bangalore";
    $scope.msg = "SG, Bangalore";
//    
//    $scope.menuItem = {"code": "VG101", "name": "Palak Panner", "menuItem": "$80", "description": "Figure Licking Good Palak Paneer."}
    
    var menuItems = [
        {"code": "VG101", "name": "Palak Panner", "price": "80", "description": "Figure Licking Good Palak Paneer."},
        {"code": "VG102", "name": "Mexican Pizza", "price": "180", "description": "Spicy Hot Pizza"},
        {"code": "VG103", "name": "Chicken Tikka", "price": "200", "description": "Figure Licking Great Chicken Tikka."},
        {"code": "VG104", "name": "Ice Cream", "price": "100", "description": "Feels Like Antartic"}
    ] 
    
    $scope.itemsList = menuItems;
    
    $scope.placeOrder = function(item) {
        var orderItem = {name: item.name, price:item.price, qty:1}
        vOrders.push(orderItem);
    }
})

myApp.controller('orderController', function($scope, vOrders) {
    $scope.myOrders = vOrders;
    
    $scope.cancelOrder = function(idx) {
        vOrders.splice(idx,1);//splice(pos, num of elements)
    }
    
    $scope.totalAmount = function() {
        var total = 0;
        angular.forEach($scope.myOrders, function(c) {
            total += (c.price * c.qty);
        })
        return total;
    }
})