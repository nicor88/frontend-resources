(function(){
    var ordersController= function($scope,customersService){
        $scope.message='Total orders';

    };
    ordersController.$inject=['$scope','customersService'];
    angular.module('customersApp').controller('ordersController',ordersController);
})();