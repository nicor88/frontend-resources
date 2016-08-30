(function(){
    var customerOrdersController= function($scope,$routeParams,customersService){
        var customerId=$routeParams.customerId;
        $scope.customer=customersService.getCustomer(customerId);
        $scope.orders=customersService.getOrders();
    };
    customerOrdersController.$inject=['$scope','$routeParams','customersService'];
    angular.module('customersApp').controller('customerOrdersController',customerOrdersController);
})();