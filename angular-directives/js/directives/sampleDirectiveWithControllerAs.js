(function(){
    var withControllerAs = function(){
        var template = '<button ng-click="vm.addItem()">Add Item</button>'+
            '<ul><li ng-repeat="i in vm.datasource">{{i.name}}</li></ul>';  // :: is used

        var controller =function(){
            var vm = this;

            vm.addItem = function(){
                vm.add()('New customer');
            };

        };

        return {
            restrict    : 'EA',
            scope       :{
                datasource  : '=',
                add         : '&'
            },
            template        : template,
            controller      : controller,
            bindToController: true,
            controllerAs    : 'vm'

        }
    };
    angular.module('myApp').directive('withControllerAs',withControllerAs);
})();