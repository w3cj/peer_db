
exports.up = function(knex, Promise) {
  return knex.schema.createTable('standard', function(table){
    table.increments();
    table.text('description');
    table.text('info');
    table.text('name');
    table.integer('domain_id').unsigned().references('id').inTable('domain').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('standard');
};
