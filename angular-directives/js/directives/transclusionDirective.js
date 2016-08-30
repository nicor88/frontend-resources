(function(){
    var transclusionDirective = function(){

        var template = '<div>Name: <input type="text" ng-model="title" />' +
            '<button ng-click="addTask()">Add Task</button>' +
            '<div class="taskContainer"><br />' +
            '<ng-transclude></ng-transclude>' +
            '</div></div>';

        var controller = function($scope){
            $scope.addTask = function(){
                if(!$scope.tasks) $scope.tasks = [];
                var task = {
                    title: $scope.title
                };
                $scope.tasks.push(task);
                $scope.title = '';
            };
        };

        return {
            restrict    : 'E',
            transclude: true,
            controller  : controller,
            template    : template
        };
    };
    angular.module('myApp',[]).directive('transclusion',transclusionDirective);
})();