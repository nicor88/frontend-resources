(function(){
    var app = angular.module('myApp');
    app.directive('isolatedScopeWithObject',function(){
        return {
            scope: {
                user    :'='
            }, //isolated scope, wall between the parent
            controller: ["$scope","$filter", function($scope,$filter) {
                $scope.changeUserInsideDirective = function(){
                    console.log("with one way binding the user is changed only inside the directive");
                    $scope.user = {
                        name        : "De Niro",
                        surname     : " Roberto",
                        secondName  : "Luca"
                    };
                };
            }],
            template:   'Name: <b>{{user.name}}</b>' +
                        '<br>' +
                        'Surname: <b>{{user.surname}}</b>' +
                        '<br>'+
                        ' Second Name: <b>{{user.secondName}}</b>'+
                        '<br>'+
                        '<button ng-click="changeUserInsideDirective()">Change user  Everywhere</button>'
        };
    });
}());