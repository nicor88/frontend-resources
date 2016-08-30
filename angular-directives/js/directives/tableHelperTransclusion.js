(function(){
    var app = angular.module('myApp');
    var tableHelper = function(){
        var link = function(scope, elem, attrs) {
            if(!scope.columns) scope.columns = [];
            var ths = elem.find('thead').find('tr').children();
            for (var i=0;i<ths.length;i++) {
                scope.vm.columns.push(ths[i].getAttribute('mapsto'));
            }
        };

        var controller = function($scope){
            var vm = this;
            vm.reverse = true;
            vm.columns = [];
            vm.orderby;

            vm.sort = function(col) {
                vm.reverse = (vm.orderby === col) ? !vm.reverse: true;
                vm.orderby = col;
            };

            vm.getRowValues = function(row) {
                var sortedValues = [];
                vm.columns.forEach(function(prop) {
                    sortedValues.push(row[prop]);
                });
                return sortedValues;
            };
        };
        return {
            restrict    : 'E',
            transclude  : true,
            scope       : {
                datasource: '=',
                columns   : '@'
            },
            link        : link,
            controller  : controller,
            controllerAs: 'vm',
            bindToController: true,
            templateUrl : 'ngComponents/table.html'
        }
    };
    app.directive('tableHelper',tableHelper);

    app.run(["$templateCache", function($templateCache) {
        $templateCache.put('ngComponents/table.html',
            '<div>'+
                '<table>'+
                    '<thead> <tr ng-transclude></tr></thead>'+
                    '<tbody>'+
                        '<tr ng-repeat="row in vm.datasource | orderBy: vm.orderBy:vm.reverse">'+
                            '<td ng-repeat="value in vm.getRowValues(row)">{{value}}</td>'+
                        '</tr>'+
                    '</tbody>'+
                '</table>'+
                '<br> <div class="rowCount">{{vm.datasource.length}} rows</div>'+
            '</div>'
        );
    }]);
})();