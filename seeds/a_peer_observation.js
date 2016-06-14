
exports.seed = function(knex, Promise) {
  return knex.raw('ALTER SEQUENCE peer_observation_id_seq restart with 4').then(function () {
    return Promise.join(
      // Deletes ALL existing entries
      knex('peer_observation').del(),

      // Inserts seed entries
      knex('peer_observation').insert({
        id: 1,
        observer_id: 1,
        observed_id: 2,
        lesson_title: 'jquery basics',
        date: new Date(5, 14, 2016),
        notes: 'lionel spent a good amount of time cold calling students, but he failed to wait the appropriate amount of time before calling on them.',
        materials: 'www.google.com'
      }),
      knex('peer_observation').insert({
        id: 2,
        observer_id: 2,
        observed_id: 3,
        lesson_title: 'jquery basics',
        date: new Date(5, 14, 2016),
        notes: 'chris spent a good amount of time cold calling students, but he failed to wait the appropriate amount of time before calling on them.',
        materials: 'www.google.com'
      }),

      knex('peer_observation').insert({
        id: 3,
        observer_id: 3,
        observed_id: 4,
        lesson_title: 'jquery basics',
        date: new Date(5, 14, 2016),
        notes: 'adam spent a good amount of time cold calling students, but he failed to wait the appropriate amount of time before calling on them.',
        materials: 'www.google.com'
      })
    );
  });
};
