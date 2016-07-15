angular.module('arrayApp')
  .controller('arrayController', mainCtrl);

function mainCtrl($scope, dataService) {
  $scope.data = dataService.myData;
  console.log($scope.data);
}
