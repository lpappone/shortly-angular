angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = {};

  $scope.getLinks = function(){
    Links.getLinks().then(function(res){
      $scope.data.links = res.data;
      console.log($scope.data.links);
    }).catch(function(err){
      console.log(err);
    });
  };

  $scope.getLinks();
  // Your code here
});

//http://localhost:8000/api/links/81b47
//This is the format we need to use.
