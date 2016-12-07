angular.module("myapp").service('checkoutService', function($http) {

   this.processPayment = function(total, payment) {
      return $http({
       method: 'POST',
       url: '/api/payment',
       data: {
          amount: total,
          payment: payment
       }
      })
   }
});
