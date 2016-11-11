angular.module("myapp").controller('productCtrl', function($scope, productService, $stateParams) {

   $scope.id = $stateParams.id - 1;
   $scope.product;
   $scope.maleProducts = [];
   $scope.femaleProducts = [];
   $scope.images = [];
   $scope.purchasable = [];
   $scope.mainImage = '';
   $scope.focus = $stateParams.gender;
   $scope.size = '';

   $scope.setFalse = function(type) {
      for (var i = 0; i < purchasable.length; i++) {
         if(type === purchasable[i].type) {
            purchasable[i].show=true;
         }
         else {
            purchasable[i].show=false;
         }
      }
   }


   $scope.getInfo = function (item) {
      $scope.maleProducts = productService.getMenImages(item, $scope.id);
      $scope.femaleProducts = productService.getWomenImages(item, $scope.id);
      $scope.product = productService.getInfo(item, $scope.id);
      $scope.purchasable = productService.getPurchaseable(item, $scope.id, $stateParams.gender)
      $scope.images = productService.getImages(item, $scope.id, $stateParams.gender)
      $scope.mainImage = productService.setMain($scope.images, $scope.purchasable);
   }

   $scope.getAllProducts = function() {
         productService.getProducts().then(function(response) {
             $scope.getInfo(response);
         });
      };

   $scope.getAllProducts();

   $scope.updateMain = function (product) {
      $scope.mainImage = product.img;
      for (var i = 0; i < $scope.purchasable.length; i++) {
         $scope.purchasable[i].show = false;
         if ($scope.purchasable[i].img === product.img) {
            $scope.purchasable[i].show = true;
         }
      }
   }

   $scope.sizeSelected = function(select) {
      $scope.size = select;
   }


});
