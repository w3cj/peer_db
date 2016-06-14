
exports.seed = function(knex, Promise) {
  return knex.raw('ALTER SEQUENCE instructor_campus_id_seq restart with 5').then(function () {
    return Promise.join(
      // Deletes ALL existing entries
      knex('instructor_campus').del(),

      // Inserts seed entries
      knex('instructor_campus').insert({
        id: 1,
        instructor_id: 1,
        campus_id: 8
      }),
      knex('instructor_campus').insert({
        id: 2,
        instructor_id: 2,
        campus_id: 8
      }),
      knex('instructor_campus').insert({
        id: 3,
        instructor_id: 3,
        campus_id: 8
      }),
      knex('instructor_campus').insert({
        id: 4,
        instructor_id: 4,
        campus_id: 8
      })
    );
  });
};
