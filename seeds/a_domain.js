
module.exports.seed = function(knex, Promise) {
  return knex.raw('ALTER SEQUENCE domain_id_seq restart with 4;').then(function () {
    return Promise.join(
      knex('domain').del(),
      knex('domain').insert({
        id: 1,
        name: 'questions'
      }),
      knex('domain').insert({
        id: 2,
        name: 'learning opportunities'
      }),
      knex('domain').insert({
        id: 3,
        name: 'things to do'
      })
    );
  });
};
