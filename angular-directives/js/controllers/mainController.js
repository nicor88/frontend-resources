(function(){
    var app = angular.module("myApp",[]);
    app.controller('mainController',function($scope){
        var counter = 0;
        $scope.user = {
            name    : "Rossi",
            secondName: "Nicola",
            surname : "Mario"
        };

        $scope.changeUser = function(){
            $scope.user = {
                name    : "Bianchi",
                secondName: "Riccardo",
                surname : "Carlo"
            };
        };

        $scope.customers = [
            {
                name: 'David',
                street: '1234 Anywhere St.',
                age: 25,
                url: 'index.html'
            },
            {
                name: 'Tina',
                street: '1800 Crest St.',
                age: 35,
                url: 'index.html'
            },
            {
                name: 'Michelle',
                street: '890 Main St.',
                age: 29,
                url: 'index.html'
            },
            {
                name: 'John',
                street: '444 Cedar St.',
                age: 18,
                url: 'index.html'
            }
        ];

        $scope.addCustomer = function (name) {
            counter++;
            $scope.customers.push({
                name: (name) ? name : 'New Customer' + counter,
                street: counter + ' Cedar Point St.',
                age: counter
            });
        };

    });
}());