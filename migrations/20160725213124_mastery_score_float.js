
exports.up = function(knex, Promise) {
  return knex.schema.table('peer_observation_standard', function(table){
    table.dropColumn('score');
  }).then(function() {
    return knex.schema.table('peer_observation_standard', function(table){
      table.float('score').defaultTo(0);
    });
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('peer_observation_standard', function(table){
    table.dropColumn('score');
  }).then(function() {
    return knex.schema.table('peer_observation_standard', function(table){
      table.integer('score');
    });
  });
};
