angular.module("myapp").controller('catalogCtrl', function($scope, $stateParams, $state, catalogService) {

   $scope.products = [];

   $scope.getAllProducts = function() {
         catalogService.getProducts().then(function(response) {
             $scope.thing(response);
         });
      };
   $scope.getAllProducts();
   $scope.thing = function (item) {
      $scope.products = catalogService.getShirts(item);
   }

});
