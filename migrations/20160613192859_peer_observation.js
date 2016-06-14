
exports.up = function(knex, Promise) {
  return knex.schema.createTable('peer_observation', function(table){
    table.increments();
    table.integer('observer_id').unsigned().references('id').inTable('instructor').onDelete('cascade');
    table.integer('observed_id').unsigned().references('id').inTable('instructor').onDelete('cascade');
    table.text('lesson_title');
    table.date('date');
    table.text('notes');
    table.text('materials');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('peer_observation');
};
