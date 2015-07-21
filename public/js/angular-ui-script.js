var app = angular.module('ui', ['ui.bootstrap']);
app.controller('AlertDemoCtrl', function ($scope) {
    $scope.alerts = [
        { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
        { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
    ];
    $scope.addAlert = function() {
        $scope.alerts.push({type:'danger',msg: 'Another alert!'});
    };
    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
});

app.controller('dateCtrl', function ($scope) {
    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();
    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

});

