angular.module('app3')
  .controller('mainCtrl', mainCtrl);

function mainCtrl($scope, dataService) {
  $scope.data = dataService.myData;
}
