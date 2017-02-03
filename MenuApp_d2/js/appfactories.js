var fact = angular.module("FactModule", []);

fact.factory("menuFactory", function() {
    
    var menuItems = [
        {"code": "VG101", "name": "Palak Panner", "price": "80", "description": "Figure Licking Good Palak Paneer."},
        {"code": "VG102", "name": "Mexican Pizza", "price": "180", "description": "Spicy Hot Pizza"},
        {"code": "VG103", "name": "Chicken Tikka", "price": "200", "description": "Figure Licking Great Chicken Tikka."},
        {"code": "VG104", "name": "Ice Cream", "price": "100", "description": "Feels Like Antartica"}
    ]
    
    return {
        getMenuItems: function() {
            return menuItems;
        }
    }
})

fact.factory("orderFactory", function() {
    var orderedItems = [];
    
    return {
        getOrderedItems: function() {
            return orderedItems;
        },
        addOrderedItem: function(newItem) {
            orderedItems.push(newItem);
        },
        deleteOrderedItem: function(idx) {
            orderedItems.splice(idx,1);
        } 
    }
})