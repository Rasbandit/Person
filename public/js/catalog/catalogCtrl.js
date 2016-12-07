angular.module("myapp").controller('catalogCtrl', function($scope, $stateParams, $state, catalogService) {

   $scope.products = [];
   $scope.limitedProducts = [];

   $scope.getAllProducts = function() {
         catalogService.getProducts().then(function(response) {
             $scope.thing(response);
         });
      };
   $scope.getAllProducts();
   $scope.thing = function (item) {
      $scope.products = catalogService.getShirts(item);
      $scope.limitedProducts = $scope.products.splice(($stateParams.page - 1) * $stateParams.view, $stateParams.view)
   }
});
