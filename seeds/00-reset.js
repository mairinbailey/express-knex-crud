exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE puppy RESTART IDENTITY CASCADE;');
};
