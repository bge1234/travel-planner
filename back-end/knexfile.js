module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/travel_development'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};