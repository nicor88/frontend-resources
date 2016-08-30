(function(){
    var app = angular.module('myApp');
    app.directive('isolatedScopeWithEvent',function(){
        return {
            scope: {
                user    :'=',
                changeUserExternal: '&'
            }, //isolated scope, wall between the parent

            template:   'Name: <b>{{user.name}}</b>' +
                        '<br>' +
                        'Surname: <b>{{user.surname}}</b>' +
                        '<br>'+
                        ' Second Name: <b>{{user.secondName}}</b>'+
                        '<br>'+
                        '<button ng-click="changeUserExternal()">Change user External from Directive</button>'
        };
    });
}());