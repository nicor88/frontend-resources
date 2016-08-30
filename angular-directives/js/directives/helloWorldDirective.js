(function(){
    var app = angular.module("myApp",[]);
    app.directive('helloWorld',function(){
       return {
           //the return is a DDO: directive definition object
           template: 'Hello World from a Directive'
       };
    });
}());