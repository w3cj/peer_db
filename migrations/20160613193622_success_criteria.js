
exports.up = function(knex, Promise) {
  return knex.schema.createTable('success_criteria', function(table){
    table.increments();
    table.integer('standard_id').unsigned().references('id').inTable('standard').onDelete('cascade');
    table.text('description');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('success_criteria');
};
