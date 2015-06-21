(function(){
    var app=angular.module('directivesApp',[]);
    app.directive('helloWorld',function(){
        return {
            template: 'Hello World'
        }
    });
    app.directive('myDirective',function(){
        return {
            restrict:'EA',// EA is form element attribute
            scope:{},
            template: '<div>{{myVal}}</div>',
            controller:controller,
            link:function(scope,element,attrs){}
        }
    });
}());