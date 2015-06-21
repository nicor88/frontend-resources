var app = angular.module('customersApp', ['ngRoute','ngAnimate']);
(function() {
    var routing = function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : '../customers/views/customers.html',
                controller  : 'customersController'
            })
            .when('/orders',{
                templateUrl : '../customers/views/orders.html',
                controller  : 'ordersController'
            })
            .when('/orders/:customerId',{
                templateUrl : '../customers/views/customerOrders.html',
                controller  : 'customerOrdersController'
            })
            .otherwise({
                redirectTo: '/'
            });;
    };
    routing.$inject=['$routeProvider'];
    app.config(routing);
})();