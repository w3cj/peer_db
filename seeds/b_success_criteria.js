
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('success_criteria').del(),

    // Inserts seed entries
    knex('success_criteria').insert({
      id: 1,
      standard_id: 1,
      description: 'some description of a success criteria',
      order: 1
    }),
    knex('success_criteria').insert({
      id: 2,
      standard_id: 1,
      description: 'some second description of a success criteria',
      order: 2
    }),
    knex('success_criteria').insert({
      id: 3,
      standard_id: 1,
      description: 'some third description of a success criteria',
      order: 3
    })
  );
};
