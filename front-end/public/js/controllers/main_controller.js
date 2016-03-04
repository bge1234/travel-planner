app.controller("MainController", ["$scope", "$http", "notesService", "destinationsService", function($scope, $http, notesService, destinationsService){
  $scope.destinations = destinationsService.all;

  // $http.get('https://travelplannerapi-benebel.herokuapp.com').then(function (response) {
  //   $scope.destinations = response.data;
  // });
}]);
