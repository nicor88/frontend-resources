(function(){
    var customerOrdersController= function($scope,$routeParams,customersFactory){
        var customerId=$routeParams.customerId;
        $scope.customer=customersFactory.getCustomer(customerId);
        $scope.orders=customersFactory.getOrders();
    };
    customerOrdersController.$inject=['$scope','$routeParams','customersFactory'];
    angular.module('customersApp').controller('customerOrdersController',customerOrdersController);
})();