(function(){
    var app = angular.module('myApp');
    app.directive('isolatedScope',function(){
        return {
            scope: {

            }, //isolated scope, wall between the parent
            template: 'Name: <b>{{name}}</b> <br>Surname: <b>{{surname}}</b>'
        };
    });
}());