
exports.up = function(knex, Promise) {
  return knex.schema.createTable('standard', function(table){
    table.increments();
    table.text('description');
    table.text('name');
    table.boolean('DSI');
    table.boolean('WDI');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('standard');
};
