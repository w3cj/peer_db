
module.exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('campus').del(),

    knex('campus').insert({
      id: 1,
      name: 'Austin'
    }),

    knex('campus').insert({
      id: 2,
      name: 'Boulder'
    }),

    knex('campus').insert({
      id: 3,
      name: 'Denver GT'
    }),

    knex('campus').insert({
      id: 4,
      name: 'Denver Platte'
    }),

    knex('campus').insert({
      id: 5,
      name: 'Fort Collins'
    }),

    knex('campus').insert({
      id: 6,
      name: 'New York'
    }),

    knex('campus').insert({
      id: 7,
      name: 'San Francisco'
    }),

    knex('campus').insert({
      id: 8,
      name: 'Seattle'
    })
  );
};
