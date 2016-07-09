angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Validation) {
  $scope.link = {};
  $scope.failed = [];
  $scope.validate = function(url) {
    $scope.failed = Validation.validate(url, 'url');
  };
  $scope.addLink = function() {
    if (!$scope.failed.length) {
      Links.addOne($scope.link);
    }
  };

});
