(function(){
    var customersController= function($scope,customersService){
        $scope.reverse=false;
        $scope.customers = [];

        function init(){
            $scope.customers=customersService.getCustomers();
        }

        init();
        $scope.sortByField=function(fieldToSort){
            $scope.sortBy=fieldToSort;
            $scope.reverse=!$scope.reverse;
        };
    };
    customersController.$inject=['$scope','customersService'];
    angular.module('customersApp').controller('customersController',customersController);
})();