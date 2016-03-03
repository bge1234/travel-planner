
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('destinations').del(),

    knex('destinations').insert({
      city: 'London',
      country: 'United Kingdon',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/London_Thames_Sunset_panorama_-_Feb_2008.jpg'
    }),
    knex('destinations').insert({
      city: 'Bangkok',
      country: 'Thailand',
      image_url: 'http://static.asiawebdirect.com/m/bangkok/portals/bangkok-com/shared/teasersL/TOP10/top-10-best-hotels/teaserMultiLarge/image/top10-hotels-.jpg'
    }),
    knex('destinations').insert({
      city: 'Paris',
      country: 'France',
      image_url: 'http://s.petrolicious.com/2015/vintage-friday/08-aug/paris/paris-6.jpg'
    }),
    knex('destinations').insert({
      city: 'Dubai',
      country: 'United Arab Emirates',
      image_url: 'https://i.ytimg.com/vi/S1oX9L6e6_Q/maxresdefault.jpg'
    }),
    knex('destinations').insert({
      city: 'Istanbul',
      country: 'Turkey',
      image_url: 'http://www.betches.com/sites/default/files/article/list/images/istanbul.jpg'
    }),
    knex('destinations').insert({
      city: 'New York City',
      country: 'United States',
      image_url: 'http://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2013/09/nyc.jpg'
    }),
    knex('destinations').insert({
      city: 'Singapore',
      country: 'Singapore',
      image_url: 'http://d3c6l3uum4x5po.cloudfront.net/wp-content/uploads/2015/02/Singapore-city-branch-image1.jpg'
    }),
    knex('destinations').insert({
      city: 'Kuala Lumpur',
      country: 'Malaysia',
      image_url: 'https://higherlogicdownload.s3.amazonaws.com/SPE/6273cee3-81ec-4728-a813-68cacef01783/UploadedImages/KL-Skyline_Night_HDR.JPG'
    }),
    knex('destinations').insert({
      city: 'Seoul',
      country: 'South Korea',
      image_url: 'http://www.layoverguide.com/wp-content/uploads/2011/06/Seoul-South-Korea.jpg'
    }),
    knex('destinations').insert({
      city: 'Hong Kong',
      country: 'China',
      image_url: 'http://www.happycow.net/blog/wp-content/uploads/2015/09/hongkong1.jpg'
    })
  );
};
