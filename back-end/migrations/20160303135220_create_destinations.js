exports.up = function(knex, Promise) {
  return knex.schema.createTable('destinations', function (t) {
    t.increments();
    t.string('city');
    t.string('country');
    t.text('image_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('destinations');
};
