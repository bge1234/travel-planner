app.factory('notesService', function () {
  return {
    addNote: function(note, destination) {
      destination.notes = note;
    }
  }
});
