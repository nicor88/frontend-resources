(function(){
    var delayBindWithCompile = ['$interpolate',function($interpolate){

        var compile = function(tElem,tAttrs){
            console.log('In Compile');
            var interpolateFunc = $interpolate(tAttrs.delayBind);
            tAttrs.$set('delayBind',null); //Clear the bind

            return {
                pre: function(scope,elem,attrs){
                    console.log('Delay in Pre '+elem[0].tagName);
                },
                post: function(scope,elem,attrs){
                    console.log('Delay in the Post '+elem[0].tagName);
                    elem.on(attrs.trigger,function(event){
                        var attr = attrs.attribute;
                        var val = interpolateFunc(scope);
                        if(attr && !elem.attr(attr)) {
                            elem.attr(attr,val);
                        }
                    });
                }
            }
        };

        return {
            restrict    : 'A',
            compile     : compile
        };
    }];
    angular.module('myApp').directive('delayBind',delayBindWithCompile);
})();