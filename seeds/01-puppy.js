
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('puppy').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('puppy').insert({
          name: 'Jake',
          phrase: 'Woof'
        }),
        knex('puppy').insert({
          name: 'Baxter',
          phrase: 'Bark, bark, bark'
        }),
        knex('puppy').insert({
          name: 'Maya',
          phrase: 'What\'s up, dawg?'
        })
      ]);
    });
};
