(function() {
    var app = angular.module('myApp');
    var header = function () {
        var link = function(scope, elem, attrs,tableHelperCtrl,transclude) {
            transclude(scope, function(content) {
                var th = angular.element('<th mapsto="' + scope.mapsto + '">' +
                    content.html() + '</th>');

                th.on('click', function() {
                    console.log('clicked on '+scope.mapsto);
                    scope.$apply(function() {
                        tableHelperCtrl.sort(scope.mapsto);
                    });
                });

                elem.replaceWith(th);
            });
        };

        return {
            restrict: 'E',
            transclude: true,
            require: '^tableHelper',
            scope: {
                mapsto: '@'
            },
            link: link
        };
    };

    app.directive('header', header);

}());
