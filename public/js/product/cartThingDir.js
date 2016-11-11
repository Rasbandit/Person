angular.module('myapp').directive('cartModule', function() {

   return {
      restrict: 'E',
      templateUrl: '../../views/cartDir.html',
      scope: {
         item: '=',
         additem: '=',
         d: '='
      },
      controller: function($scope, $stateParams) {
         $scope.size = '';

         $scope.sizeSelected = function(select) {
            $scope.size = select;
         }
      }
   };
})
