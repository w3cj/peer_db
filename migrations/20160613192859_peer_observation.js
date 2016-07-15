
exports.up = function(knex, Promise) {
  return knex.schema.createTable('peer_observation', function(table){
    table.increments();
    table.integer('observer_id').unsigned().references('id').inTable('instructor').onDelete('cascade');
    table.integer('observee_id').unsigned().references('id').inTable('instructor').onDelete('cascade');
    table.text('lesson_title');
    table.text('learning_objectives');
    table.datetime('observation_date');
    table.datetime('debrief_date');
    table.text('lesson_notes');
    table.integer('status').defaultTo(0);
    table.text('materials');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('peer_observation');
};
