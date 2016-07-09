// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth, Validation) {
  $scope.user = {};
  $scope.failed = {
    username: [],
    password: []
  };

  $scope.validate = function(string, type) {
    $scope.failed[type] = Validation.validate(string, type);
  };

  $scope.signin = function () {
    if (!$scope.failed.username.length && !$scope.failed.password.length) {
      Auth.signin($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  $scope.signup = function () {
    if (!$scope.failed.username.length && !$scope.failed.password.length) {
      Auth.signup($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };
});
