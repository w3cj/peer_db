
exports.up = function(knex, Promise) {
  return knex.schema.createTable('action_items', function(table){
    table.increments();
    table.integer('peer_observation_id').unsigned().references('id').inTable('peer_observation').onDelete('cascade');
    table.text('action');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('action_items');
};
