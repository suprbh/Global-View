angular.module('service_instagram', [])

.factory('Instagram', function($http) {
  var getPhotos = function(request) {
    return $http({
      method: 'GET',
      url: 'api/instagram',
      params: request
    })
    .then(function(response){
      console.log('response.data');
      return response.data;
    })
    .catch(function(error){
      console.error(error);
    })
  };

  return {
    getPhotos: getPhotos
  };
});