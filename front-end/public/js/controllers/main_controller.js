app.controller("MainController", ["$scope", "$http", "notesService", function($scope, $http, notesService){
  $http.get('https://travelplannerapi-benebel.herokuapp.com').then(function (response) {
    $scope.destinations = response.data;
  });
}]);
