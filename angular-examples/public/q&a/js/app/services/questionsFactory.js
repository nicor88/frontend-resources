(function(){
    var questionsFactory = function($http){
        var factory={};

        factory.getQuestion = function (idQuestion){
            return $http.get("question/" + idQuestion);
        };

        return factory;
    };
    questionsFactory.$inject=['$http'];
    angular.module('q&aApp').factory('questionsFactory',questionsFactory);
})();