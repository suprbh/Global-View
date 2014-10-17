angular.module('news', [])

.controller('NewsController', function ($scope, GoogleNews) {
  $scope.data = {};
  $scope.getNews = function(request) {
    GoogleNews.getNews(request)
      .then(function(data) {
        $scope.data = data;
      })
  };
  $scope.getNews({
    query: 'ebola',
    location: 'san francisco',
    amount: 5
  });
  console.log($scope.data);
});