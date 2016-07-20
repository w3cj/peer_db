
exports.up = function(knex, Promise) {
  return knex.schema.createTable('peer_observation_standard_success_criteria', function(table){
    table.increments();
    table.integer('peer_observation_standard_id').unsigned().references('id').inTable('peer_observation_standard').onDelete('cascade');
    table.integer('success_criteria_id').unsigned().references('id').inTable('success_criteria').onDelete('cascade');
    table.boolean('satisfied').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('peer_observation_standard_success_criteria');
};
