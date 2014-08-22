angular.module('shortly.links', ['ui.bootstrap'])

.controller('LinksController', function ($scope, Links) {

  $scope.data = {};

  $scope.getLinks = function(){
    Links.getLinks().then(function(res){
      $scope.data.links = res.data;
    }).catch(function(err){
      console.log(err);
    });
  };

  $scope.getLinks();
  // Your code here
})

.controller('CollapseController', function ($scope) {

  $scope.isCollapsed = true;
  $scope.test = "Hello World!";
});
