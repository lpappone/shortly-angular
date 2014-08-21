angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {

  // $scope.inputUrl;
  $scope.link = {};
  $scope.addLink = function(){
    //debugger;
    $scope.loading = true;
    Links.shortenLink($scope.link).then(function(){
      //debugger;
      $scope.loading = false;
      $location.path('/links');
    })
    .catch(function(error){
      console.log(error);
    });
  };

  // Your code here
});
