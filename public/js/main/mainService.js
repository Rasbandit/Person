angular.module("myapp").service('mainService', function($http, $stateParams) {

   this.getProducts = function() {
      return $http({
         method: 'GET',
         url: "/api/products"
      }).then(function(response) {
         return response.data;
      });
   };

});
