angular.module("myapp", ['ngAnimate', 'ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

   $urlRouterProvider.otherwise('/');

   $stateProvider
   .state('home', {
      templateUrl: '../views/splash.html',
      // controller: 'splashCtrl',
      url:'/'
   })
   .state('shop', {
      templateUrl: '../views/shop.html',
      controller: 'shopCtrl',
      url: '/shop'
   })
   .state('mens', {
      templateUrl: '../views/mens.html',
      controller: 'mensCtrl',
      url: '/mens'
   })
   .state('women', {
      templateUrl: '../views/women.html',
      controller: 'mensCtrl',
      url: '/women'
   })
   .state('catalog', {
      templateUrl: '../views/catalog.html',
      controller: 'catalogCtrl',
      url: '/catalog/:type/:view/:order/:style/:display/:page/:color',
      params: {
         type: "guys",
         view: "24",
         order: "popular",
         style: "tees",
         display: "hero",
         page: "1"
      }
      //:color/:price
   })
   .state('product', {
      templateUrl: '../views/product.html',
      controller: 'productCtrl',
      url: '/product/:id/:gender'
   })
   .state('cart', {
      templateUrl: '../views/cart.html',
      controller: 'cartCtrl',
      url: '/cart'
   })
}]);



angular.module("myapp").controller('cartCtrl', ["$scope", function($scope) {

   $scope.test = "testing";

}]);


angular.module("myapp").controller('catalogCtrl', ["$scope", "$stateParams", "$state", "catalogService", function($scope, $stateParams, $state, catalogService) {

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

}]);

angular.module("myapp").service('catalogService', ["$http", "$stateParams", function($http, $stateParams) {

   this.getProducts = function() {
      return $http({
         method: 'GET',
         url: "/api/products"
      }).then(function(response) {
         return response.data;
      });
   };

   this.getShirts = function(allProducts) {
   var products = [];
   if ($stateParams.type === "guys") {
      if ($stateParams.style === "tees") {
         if ($stateParams.display === "art") {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].men_t != null) {
                  products.push({
                  gender: "male",
                  id: allProducts[i].shirt_id,
                  img: allProducts[i].art,
                  price: allProducts[i].men_t_price,
                  name: allProducts[i].name,
                  artist: allProducts[i].artist,
                  color: allProducts[i].color
                  })
               }
            }
         }
         else {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].men_t != null) {
                  products.push({
                  gender: "male",
                  id: allProducts[i].shirt_id,
                  img: allProducts[i].men_t,
                  price: allProducts[i].men_t_price,
                  name: allProducts[i].name,
                  artist: allProducts[i].artist,
                  color: allProducts[i].color
                  })
               }
            }
         }
      }
      else if ($stateParams.style === "v-neck") {
         if ($stateParams.display === "art") {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].men_v != null) {
                  products.push(
                     {
                        gender: "male",
                        id: allProducts[i].shirt_id,
                        img: allProducts[i].art,
                        price: allProducts[i].men_v_price,
                        name: allProducts[i].name,
                        artist: allProducts[i].artist,
                        color: allProducts[i].color
                  })
               }
            }
         }
         else {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].men_v != null) {
                  products.push(
                     {
                        gender: "male",
                        id: allProducts[i].shirt_id,
                        img: allProducts[i].men_v,
                        price: allProducts[i].men_v_price,
                        name: allProducts[i].name,
                        artist: allProducts[i].artist,
                        color: allProducts[i].color
                  })
               }
            }
         }
      }
      else if ($stateParams.style === "hoodie") {
         if ($stateParams.display === "art") {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].men_h != null) {
                  products.push(
                     {
                        gender: "male",
                        id: allProducts[i].shirt_id,
                        img: allProducts[i].art,
                        price: allProducts[i].men_h_price,
                        name: allProducts[i].name,
                        artist: allProducts[i].artist,
                        color: allProducts[i].color
                  })
               }
            }
         }
         else {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].men_h != null) {
                  products.push(
                     {
                        gender: "male",
                        id: allProducts[i].shirt_id,
                        img: allProducts[i].men_h,
                        price: allProducts[i].men_h_price,
                        name: allProducts[i].name,
                        artist: allProducts[i].artist,
                        color: allProducts[i].color
                  })
               }
            }
         }
      }
      else if ($stateParams.style === "jersey") {
         if ($stateParams.display === "art") {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].men_j_ != null) {
                  products.push(
                     {
                        gender: "male",
                        id: allProducts[i].shirt_id,
                        img: allProducts[i].art,
                        price: allProducts[i].men_j_price,
                        name: allProducts[i].name,
                        artist: allProducts[i].artist,
                        color: allProducts[i].color
                  })
               }
            }
         }
         else {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].men_j_ != null) {
                  products.push(
                     {
                        gender: "male",
                        id: allProducts[i].shirt_id,
                        img: allProducts[i].men_j_,
                        price: allProducts[i].men_j_price,
                        name: allProducts[i].name,
                        artist: allProducts[i].artist,
                        color: allProducts[i].color
                  })
               }
            }
         }
      }
      else if ($stateParams.style === "longSleeve") {
         if ($stateParams.display === "art") {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].men_ls != null) {
                  products.push(
                     {
                        gender: "male",
                        id: allProducts[i].shirt_id,
                        img: allProducts[i].art,
                        price: allProducts[i].men_ls_price,
                        name: allProducts[i].name,
                        artist: allProducts[i].artist,
                        color: allProducts[i].color
                  })
               }
            }
         }
         else {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].men_ls != null) {
                  products.push(
                     {
                        gender: "male",
                        id: allProducts[i].shirt_id,
                        img: allProducts[i].men_ls,
                        price: allProducts[i].men_ls_price,
                        name: allProducts[i].name,
                        artist: allProducts[i].artist,
                        color: allProducts[i].color
                  })
               }
            }
         }
      }
   }
   else if ($stateParams.type === "gals") {
      if ($stateParams.style === "dol") {
         if ($stateParams.display === "art") {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].woman_d != null) {
                  products.push({
                     gender: "female",
                  id: allProducts[i].shirt_id,
                  img: allProducts[i].art,
                  price: allProducts[i].woman_d_price,
                  name: allProducts[i].name,
                  artist: allProducts[i].artist,
                  color: allProducts[i].color
                  })
               }
            }
         }
         else {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].woman_d != null) {
                  products.push({
                     gender: "female",
                  id: allProducts[i].shirt_id,
                  img: allProducts[i].woman_d,
                  price: allProducts[i].woman_d_price,
                  name: allProducts[i].name,
                  artist: allProducts[i].artist,
                  color: allProducts[i].color
                  })
               }
            }
         }
      }
      else if ($stateParams.style === "tees") {
         if ($stateParams.display === "art") {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].woman_t != null) {
                  products.push({
                     gender: "female",
                  id: allProducts[i].shirt_id,
                  img: allProducts[i].art,
                  price: allProducts[i].woman_t_price,
                  name: allProducts[i].name,
                  artist: allProducts[i].artist,
                  color: allProducts[i].color
                  })
               }
            }
         }
         else {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].woman_t != null) {
                  products.push({
                     gender: "female",
                  id: allProducts[i].shirt_id,
                  img: allProducts[i].woman_t,
                  price: allProducts[i].woman_t_price,
                  name: allProducts[i].name,
                  artist: allProducts[i].artist,
                  color: allProducts[i].color
                  })
               }
            }
         }
      }
      else if ($stateParams.style === "hoodie") {
         if ($stateParams.display === "art") {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].woman_h != null) {
                  products.push({
                     gender: "female",
                  id: allProducts[i].shirt_id,
                  img: allProducts[i].art,
                  price: allProducts[i].woman_h_price,
                  name: allProducts[i].name,
                  artist: allProducts[i].artist,
                  color: allProducts[i].color
                  })
               }
            }
         }
         else {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].woman_h != null) {
                  products.push({
                     gender: "female",
                  id: allProducts[i].shirt_id,
                  img: allProducts[i].woman_h,
                  price: allProducts[i].woman_h_price,
                  name: allProducts[i].name,
                  artist: allProducts[i].artist,
                  color: allProducts[i].color
                  })
               }
            }
         }
      }
      else if ($stateParams.style === "jersey") {
         if ($stateParams.display === "art") {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].woman_j != null) {
                  products.push({
                     gender: "female",
                  id: allProducts[i].shirt_id,
                  img: allProducts[i].art,
                  price: allProducts[i].woman_j_price,
                  name: allProducts[i].name,
                  artist: allProducts[i].artist,
                  color: allProducts[i].color
                  })
               }
            }
         }
         else {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].woman_j != null) {
                  products.push({
                     gender: "female",
                  id: allProducts[i].shirt_id,
                  img: allProducts[i].woman_j,
                  price: allProducts[i].woman_j_price,
                  name: allProducts[i].name,
                  artist: allProducts[i].artist,
                  color: allProducts[i].color
                  })
               }
            }
         }
      }
      else if ($stateParams.style === "longSleeve") {
         if ($stateParams.display === "art") {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].woman_ls != null) {
                  products.push({
                     gender: "female",
                  id: allProducts[i].shirt_id,
                  img: allProducts[i].art,
                  price: allProducts[i].woman_ls_price,
                  name: allProducts[i].name,
                  artist: allProducts[i].artist,
                  color: allProducts[i].color
                  })
               }
            }
         }
         else {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].woman_ls != null) {
                  products.push({
                     gender: "female",
                  id: allProducts[i].shirt_id,
                  img: allProducts[i].woman_ls,
                  price: allProducts[i].woman_j_price,
                  name: allProducts[i].name,
                  artist: allProducts[i].artist,
                  color: allProducts[i].color
                  })
               }
            }
         }
      }
      else if ($stateParams.style === "v-neck") {
         if ($stateParams.display === "art") {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].woman_v != null) {
                  products.push({
                     gender: "female",
                  id: allProducts[i].shirt_id,
                  img: allProducts[i].art,
                  price: allProducts[i].woman_v_price,
                  name: allProducts[i].name,
                  artist: allProducts[i].artist,
                  color: allProducts[i].color
                  })
               }
            }
         }
         else {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].woman_v != null) {
                  products.push({
                     gender: "female",
                  id: allProducts[i].shirt_id,
                  img: allProducts[i].woman_v,
                  price: allProducts[i].woman_v_price,
                  name: allProducts[i].name,
                  artist: allProducts[i].artist,
                  color: allProducts[i].color
                  })
               }
            }
         }
      }
   }
   if ($stateParams.color === "") {
      return products;
   }
   else {
      for (var i = 0; i < products.length; i++) {
         if (products[i].color != $stateParams.color) {
            products.splice(i, 1);
            i--;
         }
      }
      return products;
   }
}

}]);

angular.module('myapp').directive('showProduct', function() {

   return {
      restrict: 'E',
      templateUrl: '../../views/productDir.html',
      scope: {
         item: '='
      }
   };
})

angular.module("myapp").controller('mainCtrl', ["$scope", "mainService", function($scope, mainService) {

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

}]);

angular.module("myapp").service('mainService', ["$http", "$stateParams", function($http, $stateParams) {

   this.getProducts = function() {
      return $http({
         method: 'GET',
         url: "/api/products"
      }).then(function(response) {
         return response.data;
      });
   };

}]);

angular.module("myapp").controller('mensCtrl', ["$scope", function($scope) {

   
}]);

angular.module("myapp").controller('splashCtrl', ["$scope", function($scope) {

}]);

angular.module('myapp').directive('cartModule', function() {

   return {
      restrict: 'E',
      templateUrl: '../../views/cartDir.html',
      // scope: {
      //    item: '='
      // },
      // controller: function($scope) {
      //    $scope.size = '';
      //    $scope.hidden = true;
      //
      //    $scope.toggle = function() {
      //       if ($scope.item.show) {
      //          $scope.item.show = false
      //       }
      //       else {
      //          $scope.item.show = true;
      //       }
      //    }
      //
      //    $scope.showthing = function () {
      //       $scope.hidden = false;
      //    }
      //    $scope.sizeSelected = function(select) {
      //       $scope.size = select;
      //    }
      // }
   };
})

angular.module("myapp").controller('productCtrl', ["$scope", "productService", "$stateParams", function($scope, productService, $stateParams) {

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

}]);

angular.module("myapp").service('productService', ["$http", function($http) {

   this.getProducts = function() {
      return $http({
         method: 'GET',
         url: "/api/products"
      }).then(function(response) {
         return response.data;
      });
   };

   this.getMenImages = function(allProducts, id) {
      var men_images = [];
      men_images.push(
                  {
                     img: allProducts[id].art,
                     price: allProducts[id].men_t_price
                  });
      if (allProducts[id].men_t !== null) {
         men_images.push(
            {
               img: allProducts[id].men_t,
               price: allProducts[id].men_t_price,
               type: "mens tee",
               show: false
            });
      }
      if (allProducts[id].men_v !== null) {
         men_images.push(
                     {
                        img: allProducts[id].men_v,
                        price: allProducts[id].men_v_price,
                        type: "mens v-Neck",
                        show: false
                     });
      }
      if (allProducts[id].men_j_ !== null) {
         men_images.push(
                     {
                        img: allProducts[id].men_j_,
                        price: allProducts[id].men_j_price,
                        type: "mens tank",
                        show: false
                     });
      }
      if (allProducts[id].men_h !== null) {
         men_images.push(
                     {
                        img: allProducts[id].men_h,
                        price: allProducts[id].men_h_price,
                        type: "mens hoodie",
                        show: false
                     });
      }
      if (allProducts[id].men_ls !== null) {
         men_images.push(
                     {
                        img: allProducts[id].men_ls,
                        price: allProducts[id].men_ls_price,
                        type: "mens long sleeve",
                        show: false
                     });
      }
      return men_images;
   };
   this.getWomenImages = function(allProducts, id) {
      var woman_images = [];
      woman_images.push(
                     {
                        img: allProducts[id].art,
                        price: allProducts[id].woman_t_price,
                        type: "womens tee"
                     });
      if(allProducts[id].woman_d !== null) {
         woman_images.push(
                     {
                        img: allProducts[id].woman_d,
                        price: allProducts[id].woman_d_price,
                        type: "womens dolman",
                        show: false
                     });
      }
      if (allProducts[id].woman_t !== null) {
         woman_images.push(
                     {
                        img: allProducts[id].woman_t,
                        price: allProducts[id].men_t_price,
                        type: "womens tee",
                        show: false
                     });
      }
      if (allProducts[id].woman_j !== null) {
         woman_images.push(
                     {
                        img: allProducts[id].woman_j,
                        price: allProducts[id].men_j_price,
                        type: "womens tank",
                        show: false
                     });
      }
      if (allProducts[id].woman_h !== null) {
         woman_images.push(
                     {
                        img: allProducts[id].woman_h,
                        price: allProducts[id].men_h_price,
                        type: "womens hoddie",
                        show: false
                     });
      }
      if (allProducts[id].woman_ls !== null) {
         woman_images.push(
                     {
                        img: allProducts[id].woman_ls,
                        price: allProducts[id].men_ls_price,
                        type: "womens long Sleeve",
                        show: false
                     });
      }
      if (allProducts[id].woman_v !== null) {
         woman_images.push(
                     {
                        img: allProducts[id].woman_v,
                        price: allProducts[id].men_v_price,
                        type: "womens v-Neck",
                        show: false
                     });
      }
      return woman_images;
   };
   this.getProduct = function (allProducts, id) {
      return allProducts[id];
   }
   this.getImages = function (allProducts, id, gender) {
      if (gender === 'female') {
         return this.getWomenImages(allProducts, id);
      }
      else {
         return this.getMenImages(allProducts, id);
      }
   }
   this.getPurchaseable = function (allProducts, id, gender) {
      if (gender === 'female') {
         var thing = this.getWomenImages(allProducts, id).splice(1, this.getWomenImages(allProducts, id).length);
         return thing;
      }
      else {
         var thing = this.getMenImages(allProducts, id).slice(1, this.getMenImages(allProducts, id).length);
         return thing;
      }
   }
   this.setMain = function(images, purch) {
      purch[0].show=true;
      return images[1].img;
   }
   this.getInfo = function(products, id) {
      var info = {
         artist: products[id].artist,
         name: products[id].name
      }
      return info;
   }



}]);

angular.module("myapp").controller('shopCtrl', ["$scope", function($scope) {

   $scope.test = "shop controller works";
}]);
