var app = angular.module('q&aApp', ['ngRoute']);
(function() {
    var routing = function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : '../q&a/views/q&a.html',
                controller  : 'questionsController'
            });

    };
    routing.$inject=['$routeProvider'];
    app.config(routing);
})();