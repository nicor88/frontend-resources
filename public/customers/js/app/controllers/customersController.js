(function(){
    var customersController= function($scope,customersFactory){
        $scope.reverse=false;
        $scope.customers = [];

        function init(){
            $scope.customers=customersFactory.getCustomers();
        }

        init();
        $scope.sortByField=function(fieldToSort){
            $scope.sortBy=fieldToSort;
            $scope.reverse=!$scope.reverse;
        };
    };
    customersController.$inject=['$scope','customersFactory'];
    angular.module('customersApp').controller('customersController',customersController);
})();