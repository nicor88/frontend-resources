(function(){
    var customersService = function(){
        var customers=[
            {id:1,name:'NicolaD',city:'Berlin',orderTotal:45.999,joined:'2015-04-06'},
            {id:2,name:'Marco',city:'Frankfurt',orderTotal:38.999,joined:'2015-04-17'},
            {id:3,name:'Elena',city:'Paris',orderTotal:23.67,joined:'2015-02-12'},
            {id:4,name:'Alexander',city:'Berlin',orderTotal:10.49,joined:'2015-08-27'},
            {id:5,name:'Sebastian',city:'Munchen',orderTotal:422.999,joined:'2015-05-04'},
            {id:6,name:'Nicola',city:'Roma',orderTotal:105.35,joined:'2015-02-01'},
        ];

        this.getCustomers = function(){
            return customers;
        };
        this.getCustomer = function (customerId){
            //console.log('CustomerID: '+customerId);
            for(var i=0;i<customers.length;i++){
                if(customers[i].id==parseInt(customerId)){
                    return customers[i];
                }
            }
            return {};
        };
        this.getOrders = function(){
            var orders=[];
            for (var j=1;j<11;j++){
                var order={
                    id:j,
                    name:'order_random_'+j,
                    amount: Math.round(Math.random()*100),
                    date: new Date()
                };
                orders.push(order);
            }
            return orders;
        };
    };
    angular.module('customersApp').service('customersService',customersService);
})();