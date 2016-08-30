(function(){
    var linkDemo = function(){
        return {
            restrict: 'A', // restricted only to attributes
            link: function(scope,element,attrs){
                element.on('click',function(){
                    element.html('Clicked from a directive');
                });
                element.on('mouseenter',function(){
                    element.css('background-color','yellow');
                });
                element.on('mouseleave',function(){
                    element.css('background-color','white');
                });
            }
        };
    };
    angular.module('myApp',[]).directive('linkDemo',linkDemo);

}());