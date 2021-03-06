'Use Strict';
angular.module('App').controller('homeController', function ($scope, $state,$cordovaOauth, $localStorage, $log, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {
  var ref = firebase.database().ref();

  $scope.logOut = function () {
      Auth.logout();
      $window.location.href="#/app/login";
  };
  
  $scope.profile = function () {
      $location.path("/profile");
  };
}
);