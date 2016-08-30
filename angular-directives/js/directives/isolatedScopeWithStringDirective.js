(function(){
    var app = angular.module('myApp');
    app.directive('isolatedScopeWithString',function(){
        return {
            scope: {
                name    :'@',
                secondName: '@otherName', //the outside word will needs to use other-name to pass the second name
                surname :'@'
            }, //isolated scope, wall between the parent
            controller: ["$scope","$filter", function($scope,$filter) {
                $scope.changeUserInsideDirective = function(){
                    console.log("with two way binding the user is changed everywhere, also in the mainController");
                    $scope.name = "Pacino";
                    $scope.surname = "Gian";
                    $scope.secondName = "Andrea";
                };
            }],
            template:   'Name: <b>{{name}}</b>' +
                        '<br>' +
                        'Surname: <b>{{surname}}</b>' +
                        '<br>'+
                        ' Second Name: <b>{{secondName}}</b>'+
                        '<br>'+
                        '<button ng-click="changeUserInsideDirective()">Change user Inside Directive</button>'
        };
    });
}());