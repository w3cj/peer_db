
exports.up = function(knex, Promise) {
  return knex.schema.createTable('standard_score', function(table){
    table.increments();
    table.integer('instructor_id').unsigned().references('id').inTable('instructor').onDelete('cascade');
    table.integer('standard_id').unsigned().references('id').inTable('standard').onDelete('cascade');
    table.integer('score');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('standard_score');
};
