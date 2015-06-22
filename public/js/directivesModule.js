(function(){
    var app=angular.module('directivesApp',[]);
    app.directive('helloWorld',function(){
        return {
            template: '<b>Hello World Directive</b>'
        }
    });
    app.controller('Controller',['$scope',function($scope){
        $scope.customer ={
            name:'David',
            street: '1234 Anywhere St.'
        };
        $scope.changeCustomer=function(name,street){
            console.log(name);
            $scope.customer ={
                name:name,
                street: street
            };
        }
    }]);
    app.directive('sharedScope',function(){
        return {
            template: 'Name: {{customer.name}} Street: {{customer.street}}'
        }
    });
    app.directive('isolatedScope',function(){
        return {
            scope:{name:'@'}, //isolate scope, a wall between $scope on controller and on directive
            template: 'Name: {{name}} '
        }
    });
    app.directive('isolatedScope2',function(){
        return {
            scope:{name:'@fullname'},
            template: 'Name: {{name}} <br/> <button ng-click="name=\'Fred\'">Change Local Name to Fred</button>'
        }
    });
    app.directive('isolatedScopeWithObject',function(){
        return {
            scope:{
                datasource:'='
            },
            template: 'Name: {{datasource.name}} Street: {{datasource.street}}'+
                '<br/> <button ng-click="datasource.name=\'Fred\'">Change Global Name to Fred</button>'
        }
    });
    app.directive('isolatedScopeWithEvent',function(){
        return {
            scope:{
                datasource:'=',
                action:'&'
            },
            template: 'Name: {{datasource.name}} Street: {{datasource.street}}'+
            '<br/> <button ng-click="action()">Change Customer</button>'
        }
    });

    var linkDemo=function(){
        return{
            restrict:'A', //restriction to attribute
            link:function(scope,element,attrs){
                //jqLite functionality
                element.on('click',function(){
                    element.html('you just clicked me');
                });
                element.on('mouseenter',function(){
                    element.css('background-color','yellow');
                });
                element.on('mouseleave',function(){
                    element.css('background-color','white');
                });
            }
        }
    };
    app.directive('linkDemo',linkDemo);


}());