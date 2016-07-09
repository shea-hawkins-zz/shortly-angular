angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.criteria;
  Links.getAll().then(function(links) {
    $scope.data.links = links;
  });
});
