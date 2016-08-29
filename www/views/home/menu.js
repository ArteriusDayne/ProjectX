angular.module('App').controller('appController', function ($scope, $ionicSideMenuDelegate) {
    function ContentController($scope, $ionicSideMenuDelegate) {
        $scope.toggleLeft = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };
    }
});