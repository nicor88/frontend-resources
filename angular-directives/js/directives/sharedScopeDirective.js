(function(){
    var app = angular.module('myApp');
    app.directive('sharedScope',function(){
       return {
           //the return is a DDO: directive definition object
           template: 'Name: <b>{{user.name}}</b> <br>Surname: <b>{{user.surname}}</b>'
       };
    });
}());