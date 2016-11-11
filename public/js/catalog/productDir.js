angular.module('myapp').directive('showProduct', function() {

   return {
      restrict: 'E',
      templateUrl: '../../views/productDir.html',
      scope: {
         item: '='
      }
   };
})
