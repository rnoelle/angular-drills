angular.module('apiApp')
  .controller('mainCtrl', mainCtrl);

function mainCtrl($scope, dataService) {
  $scope.getBirds = function() {
    dataService.getBirds().then(function (response) {
      $scope.birds = response;
      console.log($scope.birds);
    });
  };
  $scope.getBirds();
}
