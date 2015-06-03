(function(){
    var ordersController= function($scope,$routeParams){
        var customerId=$routeParams.customerId;
        var customers=[
            {id:1,name:'Nicola',city:'Donori',orderTotal:45.999,joined:'2015-04-06'},
            {id:2,name:'Marco',city:'Cagliari',orderTotal:38.999,joined:'2015-04-17'},
            {id:3,name:'Elena',city:'Paris',orderTotal:23.67,joined:'2015-02-12'},
            {id:4,name:'Alexander',city:'Berlin',orderTotal:10.49,joined:'2015-08-27'},
            {id:5,name:'Sebastian',city:'Munchen',orderTotal:422.999,joined:'2015-05-04'},
            {id:6,name:'Nicola',city:'Roma',orderTotal:105.35,joined:'2015-02-01'},
        ];
        for(var i=0;i<customers.length;i++){
            if(customers[i].id==parseInt(customerId)){
                $scope.customer=customers[i];
                break;
            }
        }
        var orders=[];
        for (var j=1;j<11;j++){
            var order={
                id:j,
                name:'order_'+j,
                amount: Math.round(Math.random()*100),
                date: new Date()
            };
            orders.push(order);
        }
        $scope.orders=orders;
    };
    ordersController.$inject=['$scope','$routeParams'];
    angular.module('customersApp').controller('ordersController',ordersController);
})();