exports.up = function(knex, Promise) {
  return knex.schema.createTable('destinations', function (t) {
    t.increments();
    t.string('city');
    t.string('country');
    t.text('image_url');
    t.string('population');
    t.string('languages');
    t.string('sights');
    t.text('notes');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('destinations');
};
