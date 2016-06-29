
exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructor', function(table){
    table.increments();
    table.text('first_name');
    table.text('last_name');
    table.text('github_id');
    table.text('avatar_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('instructor');
};
