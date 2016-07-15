angular.module('apiApp')
  .service('dataService', dataService);

function dataService($http) {

  this.getBirds = function() {
    return $http({
      method: 'GET',
      url: 'http://bird-api.com/api/birds'
    }).then(function (response) {
      return response.data;
    });
  };
}
