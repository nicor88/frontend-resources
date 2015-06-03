var app = angular.module('customersApp', ['ngRoute']);
(function() {
    var routing = function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : '../customers/views/customers.html',
                controller  : 'customersController'
            })
            .when('/orders/:customerId',{
                templateUrl : '../customers/views/orders.html',
                controller  : 'ordersController'
            })
    };
    routing.$inject=['$routeProvider'];
    app.config(routing);
})();