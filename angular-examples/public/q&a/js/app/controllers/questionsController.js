(function(){
    var questionsController= function($scope,questionsFactory){
        $scope.showEnd=false;
        $scope.showQuestions=true;
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
            if(next_question=='last'){
                $scope.showEnd=true;
                $scope.showQuestions=false;
            }else{
                questionsFactory.getQuestion(next_question)
                    .success(function(data){
                        $scope.currentquestion= data;
                    })
                    .error(function(data,status,heders,config){
                        //TODO handle error
                    });
            }
        };
        $scope.reset= function(){
            $scope.answersToSave=[];
        };

        $scope.newQuestionnaire = function(){
            $scope.showEnd=false;
            $scope.showQuestions=true;
            $scope.answersToSave=[];
            init();
        };
    };
    questionsController.$inject=['$scope','questionsFactory'];
    angular.module('q&aApp').controller('questionsController',questionsController);
})();