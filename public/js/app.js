angular.module("myapp", ['ngAnimate', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

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
});
