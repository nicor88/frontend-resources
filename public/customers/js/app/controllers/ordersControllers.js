(function(){
    var ordersController= function($scope,$routeParams,customersFactory){
        var customerId=$routeParams.customerId;
        $scope.customer=customersFactory.getCustomer(customerId);
        $scope.orders=customersFactory.getOrders();
    };
    ordersController.$inject=['$scope','$routeParams','customersFactory'];
    angular.module('customersApp').controller('ordersController',ordersController);
})();