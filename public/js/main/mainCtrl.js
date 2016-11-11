angular.module("myapp").controller('mainCtrl', function($scope, mainService) {

    $scope.allProducts = function() {
        mainService.getProducts().then(function(response) {

        });
    };

   $scope.all = $scope.allProducts();

//id, size, gender, type, img, price
   $scope.test = function () {
      console.log("IM CATBUG!!");
   }

   $scope.testData = [
      {
         id: '8',
         size: 'small',
         gender: 'male',
         img: "https://cdn-images.threadless.com/threadless-shop/products/7859/1272x920design_01.jpg?w=1272&h=920",
         price: 20,
         name: "Cthulhu's Church"
      },
      {
         id: 16,
         size: 'small',
         gender: 'female',
         img:"https://cdn-images.threadless.com/threadless-shop/products/7859/1272x920design_01.jpg?w=1272&h=920",
         price: 20,
         name: "Cthulhu's Church"
      },
      {
         id: 16,
         size: 'small',
         gender: 'male',
         img: "https://cdn-images.threadless.com/threadless-shop/products/7859/1272x920design_01.jpg?w=1272&h=920",
         price: 20,
         name: "Cthulhu's Church"
      }
   ];

});
