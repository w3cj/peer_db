
exports.up = function(knex, Promise) {
  return knex.schema.createTable('peer_observation_standard', function(table){
    table.increments();
    table.integer('peer_observation_id').unsigned().references('id').inTable('peer_observation').onDelete('cascade');
    table.integer('standard_id').unsigned().references('id').inTable('standard').onDelete('cascade');
    table.text('mastery_evidence');
    table.text('growth_opportunity');
    table.integer('score');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('peer_observation_standard');
};
