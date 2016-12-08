
exports.up = function(knex, Promise) {
  return knex.schema.createTable('puppy', function(table){
    table.increments();
    table.string('name');
    table.string('phrase');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('puppy')
};
