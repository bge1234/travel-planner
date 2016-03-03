
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('destinations').del(),

    knex('destinations').insert({
      city: 'London',
      country: 'United Kingdon',
      image_url: ''
    }),
    knex('destinations').insert({
      city: 'Bangkok',
      country: 'Thailand',
      image_url: ''
    }),
    knex('destinations').insert({
      city: 'Paris',
      country: 'France',
      image_url: ''
    }),
    knex('destinations').insert({
      city: 'Dubai',
      country: 'United Arab Emirates',
      image_url: ''
    }),
    knex('destinations').insert({
      city: 'Istanbul',
      country: 'Turkey',
      image_url: ''
    }),
    knex('destinations').insert({
      city: 'New York City',
      country: 'United States',
      image_url: ''
    }),
    knex('destinations').insert({
      city: 'Singapore',
      country: 'Singapore',
      image_url: ''
    }),
    knex('destinations').insert({
      city: 'Kuala Lumpur',
      country: 'Malaysia',
      image_url: ''
    }),
    knex('destinations').insert({
      city: 'Seoul',
      country: 'South Korea',
      image_url: ''
    }),
    knex('destinations').insert({
      city: 'Hong Kong',
      country: 'China',
      image_url: ''
    })
  );
};
