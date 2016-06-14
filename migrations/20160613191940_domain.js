
exports.up = function(knex, Promise) {
  return knex.schema.createTable('domain', function(table){
    table.increments();
    table.text('name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('domain');
};
