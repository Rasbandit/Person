angular.module("myapp").controller('mainCtrl', function($scope, $stateParams, mainService) {

$scope.all = [];
$scope.total = 0;
$scope.subtotal = 0;
$scope.totalPrice = 0;
$scope.estimatedShipping = 11;

    $scope.allProducts = function() {
        mainService.getProducts().then(function(response) {
           $scope.all = response;
        });
    };

    $scope.allProducts();
    $scope.cart = [];

   $scope.test = function (id, obj, size) {
      if (size === '') {

      }
      else {
      var thing = false;
      for (var i = 0; i < $scope.cart.length; i++) {
         if($scope.cart[i].img === obj.img && $scope.cart[i].sized === size) {
            $scope.cart[i].quantity++;
            thing = true;
            $scope.total++;
            $scope.subtotal = parseFloat($scope.subtotal) + parseFloat(obj.price);
            }
         }
         if (thing === false) {
            $scope.cart.push(
               {
                  img: obj.img,
                  name: $scope.all[id].name,
                  artist: $scope.all[id].artist,
                  type: obj.type,
                  sized: size,
                  price: obj.price,
                  quantity: 1
               })
               $scope.total++;
               $scope.subtotal = parseFloat($scope.subtotal) + parseFloat(obj.price);
            }
         }
   }

   $scope.remove = function (obj) {
      for (var i = 0; i < $scope.cart.length; i++) {
         if($scope.cart[i].img === obj.img && $scope.cart[i].sized === obj.sized) {
            $scope.total -= $scope.cart[i].quantity;
            $scope.subtotal -= $scope.cart[i].quantity * $scope.cart[i].price;
            $scope.cart.splice(i, 1);
            }
         }
   }

   $scope.updateQuantity = function () {
      $scope.subtotal = 0;
      for (var i = 0; i < $scope.cart.length; i++) {
         $scope.subtotal += parseFloat($scope.cart[i].quantity) * parseFloat($scope.cart[i].price);
      }
   }
});
