var ser = angular.module("svcServices", ['FactModule']);

ser.service("menuService", function(menuFactory) {
    
    this.getAllMenuItems = function() {
        return menuFactory.getMenuItems();
    }
})

ser.service("orderService", function(orderFactory) {
    
    this.getAllOrders = function() {
        return orderFactory.getOrderedItems();
    }
    
    this.addOrder = function(newItem) {
        orderFactory.addOrderedItem(newItem);
    }
    
    this.deleteOrder = function(idx) {
        orderFactory.deleteOrderedItem(idx);
    }
    
    this.getTotalAmount  = function() {
        var total = 0;
        angular.forEach(orderFactory.getOrderedItems(), function(c) {
            total += (c.price * c.qty);
        })
        return total;
    }
})