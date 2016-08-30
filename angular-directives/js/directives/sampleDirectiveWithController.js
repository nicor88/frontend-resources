(function(){
    var withController = function(){
        var template = '<button ng-click="addItem()">Add Item</button>'+
            '<ul><li ng-repeat="i in datasource">{{i.name}}</li></ul>';  // :: is used

        var controller =[ '$scope',function($scope){
            $scope.addItem = function(){
                $scope.add()('New customer');
            };
        }];

        return {
            restrict    : 'EA',
            scope       :{
                datasource  : '=',
                add         : '&'
            },
            template    : template,
            controller  : controller

        }
    };
    angular.module('myApp').directive('withController',withController);
})();