(function(){
    var ordersController= function($scope,customersFactory){
        $scope.message='Total orders';

    };
    ordersController.$inject=['$scope','customersFactory'];
    angular.module('customersApp').controller('ordersController',ordersController);
})();