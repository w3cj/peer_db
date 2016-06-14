
exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructor', function(table){
    table.increments();
    table.text('email');
    table.text('first_name');
    table.text('last_name');
    table.boolean('DSI');
    table.boolean('WDI');
    table.text('password');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('instructor');
};
