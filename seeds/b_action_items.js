
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('action_items').del(),

     //Inserts seed entries
    knex('action_items').insert({
      id: 1,
      peer_observation_id: 1,
      action: 'spend more time cold calling students'
    }),
    knex('action_items').insert({
      id: 2,
      peer_observation_id: 2,
      action: 'give students more time before cold calling'
    }),
    knex('action_items').insert({
      id: 3,
      peer_observation_id: 3,
      action: 'support error culture by celebrating mistakes'
    })
  );
};
