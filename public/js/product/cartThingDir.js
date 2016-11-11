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
