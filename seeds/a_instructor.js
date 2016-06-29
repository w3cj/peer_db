
module.exports.seed = function(knex, Promise) {
  return knex.raw('ALTER SEQUENCE instructor_id_seq restart with 5;').then(function () {
    return Promise.join(
      knex('instructor').del(),

      knex('instructor').insert({
        id: 1,
        first_name: 'CJ',
        last_name: 'Reynolds'
      }),

      knex('instructor').insert({
        id: 2,
        first_name: 'Lionel',
        last_name: 'Lints'
      }),

      knex('instructor').insert({
        id: 3,
        first_name: 'Chris',
        last_name: 'Burkhart'
      }),

      knex('instructor').insert({
        id: 4,
        first_name: 'Adam',
        last_name: 'Lichty'
      })
    );
  });
};
