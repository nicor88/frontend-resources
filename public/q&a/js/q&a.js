var app = angular.module('q&aApp', ['ngRoute']);
(function() {
    var routing = function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : '../q&a/views/q&a.html',
                controller  : 'questionsController'
            });

    };
    routing.$inject=['$routeProvider'];
    app.config(routing);
})();
(function(){
    var questionsController= function($scope,questionsFactory){
        $scope.selectedAnswer = {};
        $scope.answersToSave=[];
        function init(){
            var id=1;
            questionsFactory.getQuestion(id)
                .success(function(data){
                   $scope.currentquestion= data;
                })
                .error(function(data,status,heders,config){
                    //TODO handle error
                });
        }

        init();
        $scope.nextQuestion= function(){
            var answerToSave={
                id_question : angular.fromJson($scope.currentquestion).id,
                answer      : angular.fromJson($scope.selectedAnswer).answer
            };
            var next_question=angular.fromJson($scope.selectedAnswer).id_question;
            console.log(next_question);
            $scope.answersToSave.push(answerToSave);
            questionsFactory.getQuestion(next_question)
                .success(function(data){
                    $scope.currentquestion= data;
                })
                .error(function(data,status,heders,config){
                    //TODO handle error
                });
        };
        $scope.reset= function(){
            $scope.answersToSave=[];
        };
    };
    questionsController.$inject=['$scope','questionsFactory'];
    angular.module('q&aApp').controller('questionsController',questionsController);
})();
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