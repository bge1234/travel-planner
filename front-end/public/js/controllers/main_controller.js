app.controller("MainController", ["$scope", "$http", "notesService", "destinationsService", function($scope, $http, notesService, destinationsService){
  $scope.destinations = destinationsService.all;

  $scope.saveNote = function(destination) {
    notesService.addNote(destination.note, destination.destination);
  }

  // $http.get('https://travelplannerapi-benebel.herokuapp.com').then(function (response) {
  //   $scope.destinations = response.data;
  // });
}]);
