
exports.up = function(knex, Promise) {
  return knex.schema.createTable('standard', function(table){
    table.increments();
    table.text('description');
    table.text('name');
    table.text('domain');
    table.integer('domain_id').unsigned().references('id').inTable('domain').onDelete('cascade');
    table.boolean('DSI').defaultTo(true);
    table.boolean('WDI').defaultTo(true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('standard');
};
