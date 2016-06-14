
exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructor_campus', function(table){
    table.increments();
    table.integer('instructor_id').unsigned().references('id').inTable('instructor').onDelete('cascade');
    table.integer('campus_id').unsigned().references('id').inTable('campus').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('instructor_campus');
};
